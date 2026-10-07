# `dataAwsccDirectoryserviceMicrosoftAd` Submodule <a name="`dataAwsccDirectoryserviceMicrosoftAd` Submodule" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDirectoryserviceMicrosoftAd <a name="DataAwsccDirectoryserviceMicrosoftAd" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/directoryservice_microsoft_ad awscc_directoryservice_microsoft_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer"></a>

```typescript
import { dataAwsccDirectoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

new dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd(scope: Construct, id: string, config: DataAwsccDirectoryserviceMicrosoftAdConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig">DataAwsccDirectoryserviceMicrosoftAdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig">DataAwsccDirectoryserviceMicrosoftAdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isConstruct"></a>

```typescript
import { dataAwsccDirectoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformElement"></a>

```typescript
import { dataAwsccDirectoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformDataSource"></a>

```typescript
import { dataAwsccDirectoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport"></a>

```typescript
import { dataAwsccDirectoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDirectoryserviceMicrosoftAd to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDirectoryserviceMicrosoftAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/directoryservice_microsoft_ad#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDirectoryserviceMicrosoftAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.createAlias">createAlias</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.enableSso">enableSso</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference">DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `createAlias`<sup>Required</sup> <a name="createAlias" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.createAlias"></a>

```typescript
public readonly createAlias: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.dnsIpAddresses"></a>

```typescript
public readonly dnsIpAddresses: string[];
```

- *Type:* string[]

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `enableSso`<sup>Required</sup> <a name="enableSso" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.enableSso"></a>

```typescript
public readonly enableSso: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.vpcSettings"></a>

```typescript
public readonly vpcSettings: DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference">DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAd.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDirectoryserviceMicrosoftAdConfig <a name="DataAwsccDirectoryserviceMicrosoftAdConfig" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.Initializer"></a>

```typescript
import { dataAwsccDirectoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

const dataAwsccDirectoryserviceMicrosoftAdConfig: dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/directoryservice_microsoft_ad#id DataAwsccDirectoryserviceMicrosoftAd#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDirectoryserviceMicrosoftAdVpcSettings <a name="DataAwsccDirectoryserviceMicrosoftAdVpcSettings" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettings.Initializer"></a>

```typescript
import { dataAwsccDirectoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

const dataAwsccDirectoryserviceMicrosoftAdVpcSettings: dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference <a name="DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDirectoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

new dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettings">DataAwsccDirectoryserviceMicrosoftAdVpcSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDirectoryserviceMicrosoftAdVpcSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceMicrosoftAd.DataAwsccDirectoryserviceMicrosoftAdVpcSettings">DataAwsccDirectoryserviceMicrosoftAdVpcSettings</a>

---




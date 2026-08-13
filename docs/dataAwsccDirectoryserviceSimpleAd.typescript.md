# `dataAwsccDirectoryserviceSimpleAd` Submodule <a name="`dataAwsccDirectoryserviceSimpleAd` Submodule" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDirectoryserviceSimpleAd <a name="DataAwsccDirectoryserviceSimpleAd" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/directoryservice_simple_ad awscc_directoryservice_simple_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer"></a>

```typescript
import { dataAwsccDirectoryserviceSimpleAd } from '@cdktn/provider-awscc'

new dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd(scope: Construct, id: string, config: DataAwsccDirectoryserviceSimpleAdConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig">DataAwsccDirectoryserviceSimpleAdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig">DataAwsccDirectoryserviceSimpleAdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDirectoryserviceSimpleAd resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isConstruct"></a>

```typescript
import { dataAwsccDirectoryserviceSimpleAd } from '@cdktn/provider-awscc'

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformElement"></a>

```typescript
import { dataAwsccDirectoryserviceSimpleAd } from '@cdktn/provider-awscc'

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformDataSource"></a>

```typescript
import { dataAwsccDirectoryserviceSimpleAd } from '@cdktn/provider-awscc'

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generateConfigForImport"></a>

```typescript
import { dataAwsccDirectoryserviceSimpleAd } from '@cdktn/provider-awscc'

dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDirectoryserviceSimpleAd resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDirectoryserviceSimpleAd to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDirectoryserviceSimpleAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/directoryservice_simple_ad#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDirectoryserviceSimpleAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.createAlias">createAlias</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.enableSso">enableSso</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList">DataAwsccDirectoryserviceSimpleAdTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference">DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `createAlias`<sup>Required</sup> <a name="createAlias" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.createAlias"></a>

```typescript
public readonly createAlias: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.dnsIpAddresses"></a>

```typescript
public readonly dnsIpAddresses: string[];
```

- *Type:* string[]

---

##### `enableSso`<sup>Required</sup> <a name="enableSso" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.enableSso"></a>

```typescript
public readonly enableSso: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.tags"></a>

```typescript
public readonly tags: DataAwsccDirectoryserviceSimpleAdTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList">DataAwsccDirectoryserviceSimpleAdTagsList</a>

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.vpcSettings"></a>

```typescript
public readonly vpcSettings: DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference">DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAd.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDirectoryserviceSimpleAdConfig <a name="DataAwsccDirectoryserviceSimpleAdConfig" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.Initializer"></a>

```typescript
import { dataAwsccDirectoryserviceSimpleAd } from '@cdktn/provider-awscc'

const dataAwsccDirectoryserviceSimpleAdConfig: dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/directoryservice_simple_ad#id DataAwsccDirectoryserviceSimpleAd#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDirectoryserviceSimpleAdTags <a name="DataAwsccDirectoryserviceSimpleAdTags" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTags.Initializer"></a>

```typescript
import { dataAwsccDirectoryserviceSimpleAd } from '@cdktn/provider-awscc'

const dataAwsccDirectoryserviceSimpleAdTags: dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTags = { ... }
```


### DataAwsccDirectoryserviceSimpleAdVpcSettings <a name="DataAwsccDirectoryserviceSimpleAdVpcSettings" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettings.Initializer"></a>

```typescript
import { dataAwsccDirectoryserviceSimpleAd } from '@cdktn/provider-awscc'

const dataAwsccDirectoryserviceSimpleAdVpcSettings: dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDirectoryserviceSimpleAdTagsList <a name="DataAwsccDirectoryserviceSimpleAdTagsList" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer"></a>

```typescript
import { dataAwsccDirectoryserviceSimpleAd } from '@cdktn/provider-awscc'

new dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDirectoryserviceSimpleAdTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDirectoryserviceSimpleAdTagsOutputReference <a name="DataAwsccDirectoryserviceSimpleAdTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDirectoryserviceSimpleAd } from '@cdktn/provider-awscc'

new dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTags">DataAwsccDirectoryserviceSimpleAdTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDirectoryserviceSimpleAdTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdTags">DataAwsccDirectoryserviceSimpleAdTags</a>

---


### DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference <a name="DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDirectoryserviceSimpleAd } from '@cdktn/provider-awscc'

new dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettings">DataAwsccDirectoryserviceSimpleAdVpcSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDirectoryserviceSimpleAdVpcSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectoryserviceSimpleAd.DataAwsccDirectoryserviceSimpleAdVpcSettings">DataAwsccDirectoryserviceSimpleAdVpcSettings</a>

---




# `dataAwsccDirectconnectLag` Submodule <a name="`dataAwsccDirectconnectLag` Submodule" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDirectconnectLag <a name="DataAwsccDirectconnectLag" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/directconnect_lag awscc_directconnect_lag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.Initializer"></a>

```typescript
import { dataAwsccDirectconnectLag } from '@cdktn/provider-awscc'

new dataAwsccDirectconnectLag.DataAwsccDirectconnectLag(scope: Construct, id: string, config: DataAwsccDirectconnectLagConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig">DataAwsccDirectconnectLagConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig">DataAwsccDirectconnectLagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDirectconnectLag resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.isConstruct"></a>

```typescript
import { dataAwsccDirectconnectLag } from '@cdktn/provider-awscc'

dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.isTerraformElement"></a>

```typescript
import { dataAwsccDirectconnectLag } from '@cdktn/provider-awscc'

dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.isTerraformDataSource"></a>

```typescript
import { dataAwsccDirectconnectLag } from '@cdktn/provider-awscc'

dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.generateConfigForImport"></a>

```typescript
import { dataAwsccDirectconnectLag } from '@cdktn/provider-awscc'

dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDirectconnectLag resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDirectconnectLag to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDirectconnectLag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/directconnect_lag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDirectconnectLag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.connectionsBandwidth">connectionsBandwidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.lagArn">lagArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.lagId">lagId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.lagName">lagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.lagState">lagState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.minimumLinks">minimumLinks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.requestMacSec">requestMacSec</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList">DataAwsccDirectconnectLagTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `connectionsBandwidth`<sup>Required</sup> <a name="connectionsBandwidth" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.connectionsBandwidth"></a>

```typescript
public readonly connectionsBandwidth: string;
```

- *Type:* string

---

##### `lagArn`<sup>Required</sup> <a name="lagArn" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.lagArn"></a>

```typescript
public readonly lagArn: string;
```

- *Type:* string

---

##### `lagId`<sup>Required</sup> <a name="lagId" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.lagId"></a>

```typescript
public readonly lagId: string;
```

- *Type:* string

---

##### `lagName`<sup>Required</sup> <a name="lagName" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.lagName"></a>

```typescript
public readonly lagName: string;
```

- *Type:* string

---

##### `lagState`<sup>Required</sup> <a name="lagState" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.lagState"></a>

```typescript
public readonly lagState: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `minimumLinks`<sup>Required</sup> <a name="minimumLinks" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.minimumLinks"></a>

```typescript
public readonly minimumLinks: number;
```

- *Type:* number

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `requestMacSec`<sup>Required</sup> <a name="requestMacSec" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.requestMacSec"></a>

```typescript
public readonly requestMacSec: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.tags"></a>

```typescript
public readonly tags: DataAwsccDirectconnectLagTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList">DataAwsccDirectconnectLagTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLag.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDirectconnectLagConfig <a name="DataAwsccDirectconnectLagConfig" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.Initializer"></a>

```typescript
import { dataAwsccDirectconnectLag } from '@cdktn/provider-awscc'

const dataAwsccDirectconnectLagConfig: dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/directconnect_lag#id DataAwsccDirectconnectLag#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDirectconnectLagTags <a name="DataAwsccDirectconnectLagTags" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTags.Initializer"></a>

```typescript
import { dataAwsccDirectconnectLag } from '@cdktn/provider-awscc'

const dataAwsccDirectconnectLagTags: dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDirectconnectLagTagsList <a name="DataAwsccDirectconnectLagTagsList" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.Initializer"></a>

```typescript
import { dataAwsccDirectconnectLag } from '@cdktn/provider-awscc'

new dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDirectconnectLagTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDirectconnectLagTagsOutputReference <a name="DataAwsccDirectconnectLagTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDirectconnectLag } from '@cdktn/provider-awscc'

new dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTags">DataAwsccDirectconnectLagTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDirectconnectLagTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDirectconnectLag.DataAwsccDirectconnectLagTags">DataAwsccDirectconnectLagTags</a>

---




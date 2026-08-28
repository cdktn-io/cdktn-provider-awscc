# `dataAwsccIotfleetwiseVehicle` Submodule <a name="`dataAwsccIotfleetwiseVehicle` Submodule" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotfleetwiseVehicle <a name="DataAwsccIotfleetwiseVehicle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_vehicle awscc_iotfleetwise_vehicle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle(scope: Construct, id: string, config: DataAwsccIotfleetwiseVehicleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig">DataAwsccIotfleetwiseVehicleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig">DataAwsccIotfleetwiseVehicleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotfleetwiseVehicle resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isConstruct"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformElement"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotfleetwiseVehicle resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotfleetwiseVehicle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotfleetwiseVehicle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_vehicle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotfleetwiseVehicle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.associationBehavior">associationBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.attributes">attributes</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.decoderManifestArn">decoderManifestArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.lastModificationTime">lastModificationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.modelManifestArn">modelManifestArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.stateTemplates">stateTemplates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList">DataAwsccIotfleetwiseVehicleStateTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList">DataAwsccIotfleetwiseVehicleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associationBehavior`<sup>Required</sup> <a name="associationBehavior" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.associationBehavior"></a>

```typescript
public readonly associationBehavior: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.attributes"></a>

```typescript
public readonly attributes: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `decoderManifestArn`<sup>Required</sup> <a name="decoderManifestArn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.decoderManifestArn"></a>

```typescript
public readonly decoderManifestArn: string;
```

- *Type:* string

---

##### `lastModificationTime`<sup>Required</sup> <a name="lastModificationTime" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.lastModificationTime"></a>

```typescript
public readonly lastModificationTime: string;
```

- *Type:* string

---

##### `modelManifestArn`<sup>Required</sup> <a name="modelManifestArn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.modelManifestArn"></a>

```typescript
public readonly modelManifestArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stateTemplates`<sup>Required</sup> <a name="stateTemplates" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.stateTemplates"></a>

```typescript
public readonly stateTemplates: DataAwsccIotfleetwiseVehicleStateTemplatesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList">DataAwsccIotfleetwiseVehicleStateTemplatesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotfleetwiseVehicleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList">DataAwsccIotfleetwiseVehicleTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicle.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotfleetwiseVehicleConfig <a name="DataAwsccIotfleetwiseVehicleConfig" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseVehicleConfig: dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotfleetwise_vehicle#id DataAwsccIotfleetwiseVehicle#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotfleetwiseVehicleStateTemplates <a name="DataAwsccIotfleetwiseVehicleStateTemplates" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseVehicleStateTemplates: dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates = { ... }
```


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy: dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy = { ... }
```


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic: dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic = { ... }
```


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate: dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate = { ... }
```


### DataAwsccIotfleetwiseVehicleTags <a name="DataAwsccIotfleetwiseVehicleTags" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

const dataAwsccIotfleetwiseVehicleTags: dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotfleetwiseVehicleStateTemplatesList <a name="DataAwsccIotfleetwiseVehicleStateTemplatesList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.get"></a>

```typescript
public get(index: number): DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference <a name="DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.stateTemplateUpdateStrategy">stateTemplateUpdateStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates">DataAwsccIotfleetwiseVehicleStateTemplates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `stateTemplateUpdateStrategy`<sup>Required</sup> <a name="stateTemplateUpdateStrategy" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.stateTemplateUpdateStrategy"></a>

```typescript
public readonly stateTemplateUpdateStrategy: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotfleetwiseVehicleStateTemplates;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplates">DataAwsccIotfleetwiseVehicleStateTemplates</a>

---


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.onChange">onChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.periodic">periodic</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `onChange`<sup>Required</sup> <a name="onChange" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.onChange"></a>

```typescript
public readonly onChange: string;
```

- *Type:* string

---

##### `periodic`<sup>Required</sup> <a name="periodic" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.periodic"></a>

```typescript
public readonly periodic: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategy</a>

---


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.stateTemplateUpdateRate">stateTemplateUpdateRate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateTemplateUpdateRate`<sup>Required</sup> <a name="stateTemplateUpdateRate" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.stateTemplateUpdateRate"></a>

```typescript
public readonly stateTemplateUpdateRate: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodic</a>

---


### DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference <a name="DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate">DataAwsccIotfleetwiseVehicleStateTemplatesStateTemplateUpdateStrategyPeriodicStateTemplateUpdateRate</a>

---


### DataAwsccIotfleetwiseVehicleTagsList <a name="DataAwsccIotfleetwiseVehicleTagsList" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotfleetwiseVehicleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotfleetwiseVehicleTagsOutputReference <a name="DataAwsccIotfleetwiseVehicleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotfleetwiseVehicle } from '@cdktn/provider-awscc'

new dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags">DataAwsccIotfleetwiseVehicleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotfleetwiseVehicleTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotfleetwiseVehicle.DataAwsccIotfleetwiseVehicleTags">DataAwsccIotfleetwiseVehicleTags</a>

---




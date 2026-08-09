# `dataAwsccConnectHoursOfOperation` Submodule <a name="`dataAwsccConnectHoursOfOperation` Submodule" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConnectHoursOfOperation <a name="DataAwsccConnectHoursOfOperation" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_hours_of_operation awscc_connect_hours_of_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation(scope: Construct, id: string, config: DataAwsccConnectHoursOfOperationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig">DataAwsccConnectHoursOfOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig">DataAwsccConnectHoursOfOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConnectHoursOfOperation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.isConstruct"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.isTerraformElement"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.isTerraformDataSource"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.generateConfigForImport"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccConnectHoursOfOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccConnectHoursOfOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccConnectHoursOfOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_hours_of_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConnectHoursOfOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.childHoursOfOperations">childHoursOfOperations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList">DataAwsccConnectHoursOfOperationChildHoursOfOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList">DataAwsccConnectHoursOfOperationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.hoursOfOperationOverrides">hoursOfOperationOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.parentHoursOfOperations">parentHoursOfOperations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList">DataAwsccConnectHoursOfOperationParentHoursOfOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList">DataAwsccConnectHoursOfOperationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `childHoursOfOperations`<sup>Required</sup> <a name="childHoursOfOperations" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.childHoursOfOperations"></a>

```typescript
public readonly childHoursOfOperations: DataAwsccConnectHoursOfOperationChildHoursOfOperationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList">DataAwsccConnectHoursOfOperationChildHoursOfOperationsList</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.config"></a>

```typescript
public readonly config: DataAwsccConnectHoursOfOperationConfigAList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList">DataAwsccConnectHoursOfOperationConfigAList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.hoursOfOperationArn"></a>

```typescript
public readonly hoursOfOperationArn: string;
```

- *Type:* string

---

##### `hoursOfOperationOverrides`<sup>Required</sup> <a name="hoursOfOperationOverrides" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.hoursOfOperationOverrides"></a>

```typescript
public readonly hoursOfOperationOverrides: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList</a>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentHoursOfOperations`<sup>Required</sup> <a name="parentHoursOfOperations" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.parentHoursOfOperations"></a>

```typescript
public readonly parentHoursOfOperations: DataAwsccConnectHoursOfOperationParentHoursOfOperationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList">DataAwsccConnectHoursOfOperationParentHoursOfOperationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.tags"></a>

```typescript
public readonly tags: DataAwsccConnectHoursOfOperationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList">DataAwsccConnectHoursOfOperationTagsList</a>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConnectHoursOfOperationChildHoursOfOperations <a name="DataAwsccConnectHoursOfOperationChildHoursOfOperations" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperations.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

const dataAwsccConnectHoursOfOperationChildHoursOfOperations: dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperations = { ... }
```


### DataAwsccConnectHoursOfOperationConfig <a name="DataAwsccConnectHoursOfOperationConfig" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

const dataAwsccConnectHoursOfOperationConfig: dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/connect_hours_of_operation#id DataAwsccConnectHoursOfOperation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConnectHoursOfOperationConfigA <a name="DataAwsccConnectHoursOfOperationConfigA" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigA.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

const dataAwsccConnectHoursOfOperationConfigA: dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigA = { ... }
```


### DataAwsccConnectHoursOfOperationConfigEndTime <a name="DataAwsccConnectHoursOfOperationConfigEndTime" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTime.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

const dataAwsccConnectHoursOfOperationConfigEndTime: dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTime = { ... }
```


### DataAwsccConnectHoursOfOperationConfigStartTime <a name="DataAwsccConnectHoursOfOperationConfigStartTime" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTime.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

const dataAwsccConnectHoursOfOperationConfigStartTime: dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTime = { ... }
```


### DataAwsccConnectHoursOfOperationHoursOfOperationOverrides <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverrides" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverrides.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

const dataAwsccConnectHoursOfOperationHoursOfOperationOverrides: dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverrides = { ... }
```


### DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

const dataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig: dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig = { ... }
```


### DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

const dataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime: dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime = { ... }
```


### DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

const dataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime: dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime = { ... }
```


### DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

const dataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig: dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig = { ... }
```


### DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

const dataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern: dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern = { ... }
```


### DataAwsccConnectHoursOfOperationParentHoursOfOperations <a name="DataAwsccConnectHoursOfOperationParentHoursOfOperations" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperations.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

const dataAwsccConnectHoursOfOperationParentHoursOfOperations: dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperations = { ... }
```


### DataAwsccConnectHoursOfOperationTags <a name="DataAwsccConnectHoursOfOperationTags" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTags.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

const dataAwsccConnectHoursOfOperationTags: dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConnectHoursOfOperationChildHoursOfOperationsList <a name="DataAwsccConnectHoursOfOperationChildHoursOfOperationsList" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference <a name="DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperations">DataAwsccConnectHoursOfOperationChildHoursOfOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectHoursOfOperationChildHoursOfOperations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationChildHoursOfOperations">DataAwsccConnectHoursOfOperationChildHoursOfOperations</a>

---


### DataAwsccConnectHoursOfOperationConfigAList <a name="DataAwsccConnectHoursOfOperationConfigAList" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.get"></a>

```typescript
public get(index: number): DataAwsccConnectHoursOfOperationConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectHoursOfOperationConfigAOutputReference <a name="DataAwsccConnectHoursOfOperationConfigAOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference">DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference">DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigA">DataAwsccConnectHoursOfOperationConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.property.endTime"></a>

```typescript
public readonly endTime: DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference">DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.property.startTime"></a>

```typescript
public readonly startTime: DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference">DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectHoursOfOperationConfigA;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigA">DataAwsccConnectHoursOfOperationConfigA</a>

---


### DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference <a name="DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTime">DataAwsccConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectHoursOfOperationConfigEndTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigEndTime">DataAwsccConnectHoursOfOperationConfigEndTime</a>

---


### DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference <a name="DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTime">DataAwsccConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectHoursOfOperationConfigStartTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationConfigStartTime">DataAwsccConnectHoursOfOperationConfigStartTime</a>

---


### DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.get"></a>

```typescript
public get(index: number): DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFrom">effectiveFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTill">effectiveTill</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideId">hoursOfOperationOverrideId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfig">overrideConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescription">overrideDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideName">overrideName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideType">overrideType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfig">recurrenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverrides">DataAwsccConnectHoursOfOperationHoursOfOperationOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveFrom`<sup>Required</sup> <a name="effectiveFrom" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFrom"></a>

```typescript
public readonly effectiveFrom: string;
```

- *Type:* string

---

##### `effectiveTill`<sup>Required</sup> <a name="effectiveTill" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTill"></a>

```typescript
public readonly effectiveTill: string;
```

- *Type:* string

---

##### `hoursOfOperationOverrideId`<sup>Required</sup> <a name="hoursOfOperationOverrideId" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideId"></a>

```typescript
public readonly hoursOfOperationOverrideId: string;
```

- *Type:* string

---

##### `overrideConfig`<sup>Required</sup> <a name="overrideConfig" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfig"></a>

```typescript
public readonly overrideConfig: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList</a>

---

##### `overrideDescription`<sup>Required</sup> <a name="overrideDescription" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescription"></a>

```typescript
public readonly overrideDescription: string;
```

- *Type:* string

---

##### `overrideName`<sup>Required</sup> <a name="overrideName" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideName"></a>

```typescript
public readonly overrideName: string;
```

- *Type:* string

---

##### `overrideType`<sup>Required</sup> <a name="overrideType" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideType"></a>

```typescript
public readonly overrideType: string;
```

- *Type:* string

---

##### `recurrenceConfig`<sup>Required</sup> <a name="recurrenceConfig" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfig"></a>

```typescript
public readonly recurrenceConfig: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectHoursOfOperationHoursOfOperationOverrides;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverrides">DataAwsccConnectHoursOfOperationHoursOfOperationOverrides</a>

---


### DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

---


### DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get"></a>

```typescript
public get(index: number): DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTime"></a>

```typescript
public readonly endTime: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTime"></a>

```typescript
public readonly startTime: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>

---


### DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

---


### DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePattern">recurrencePattern</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recurrencePattern`<sup>Required</sup> <a name="recurrencePattern" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePattern"></a>

```typescript
public readonly recurrencePattern: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

---


### DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference <a name="DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonth">byMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDay">byMonthDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrence">byWeekdayOccurrence</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `byMonth`<sup>Required</sup> <a name="byMonth" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonth"></a>

```typescript
public readonly byMonth: number[];
```

- *Type:* number[]

---

##### `byMonthDay`<sup>Required</sup> <a name="byMonthDay" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDay"></a>

```typescript
public readonly byMonthDay: number[];
```

- *Type:* number[]

---

##### `byWeekdayOccurrence`<sup>Required</sup> <a name="byWeekdayOccurrence" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrence"></a>

```typescript
public readonly byWeekdayOccurrence: number[];
```

- *Type:* number[]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">DataAwsccConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

---


### DataAwsccConnectHoursOfOperationParentHoursOfOperationsList <a name="DataAwsccConnectHoursOfOperationParentHoursOfOperationsList" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference <a name="DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperations">DataAwsccConnectHoursOfOperationParentHoursOfOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectHoursOfOperationParentHoursOfOperations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationParentHoursOfOperations">DataAwsccConnectHoursOfOperationParentHoursOfOperations</a>

---


### DataAwsccConnectHoursOfOperationTagsList <a name="DataAwsccConnectHoursOfOperationTagsList" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.get"></a>

```typescript
public get(index: number): DataAwsccConnectHoursOfOperationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccConnectHoursOfOperationTagsOutputReference <a name="DataAwsccConnectHoursOfOperationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccConnectHoursOfOperation } from '@cdktn/provider-awscc'

new dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTags">DataAwsccConnectHoursOfOperationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccConnectHoursOfOperationTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConnectHoursOfOperation.DataAwsccConnectHoursOfOperationTags">DataAwsccConnectHoursOfOperationTags</a>

---




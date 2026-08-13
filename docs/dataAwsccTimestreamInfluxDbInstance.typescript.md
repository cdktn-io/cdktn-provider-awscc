# `dataAwsccTimestreamInfluxDbInstance` Submodule <a name="`dataAwsccTimestreamInfluxDbInstance` Submodule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTimestreamInfluxDbInstance <a name="DataAwsccTimestreamInfluxDbInstance" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/timestream_influx_db_instance awscc_timestream_influx_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

new dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance(scope: Construct, id: string, config: DataAwsccTimestreamInfluxDbInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig">DataAwsccTimestreamInfluxDbInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig">DataAwsccTimestreamInfluxDbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTimestreamInfluxDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.isConstruct"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.isTerraformElement"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.isTerraformDataSource"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.generateConfigForImport"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccTimestreamInfluxDbInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccTimestreamInfluxDbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccTimestreamInfluxDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/timestream_influx_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTimestreamInfluxDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.dbInstanceType">dbInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.dbParameterGroupIdentifier">dbParameterGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.dbStorageType">dbStorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.deploymentType">deploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.influxAuthParametersSecretArn">influxAuthParametersSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.influxDbInstanceId">influxDbInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.logDeliveryConfiguration">logDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference">DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference">DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.nextMaintenanceTime">nextMaintenanceTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.publiclyAccessible">publiclyAccessible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.secondaryAvailabilityZone">secondaryAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList">DataAwsccTimestreamInfluxDbInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.vpcSubnetIds">vpcSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.dbInstanceType"></a>

```typescript
public readonly dbInstanceType: string;
```

- *Type:* string

---

##### `dbParameterGroupIdentifier`<sup>Required</sup> <a name="dbParameterGroupIdentifier" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.dbParameterGroupIdentifier"></a>

```typescript
public readonly dbParameterGroupIdentifier: string;
```

- *Type:* string

---

##### `dbStorageType`<sup>Required</sup> <a name="dbStorageType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.dbStorageType"></a>

```typescript
public readonly dbStorageType: string;
```

- *Type:* string

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.deploymentType"></a>

```typescript
public readonly deploymentType: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `influxAuthParametersSecretArn`<sup>Required</sup> <a name="influxAuthParametersSecretArn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.influxAuthParametersSecretArn"></a>

```typescript
public readonly influxAuthParametersSecretArn: string;
```

- *Type:* string

---

##### `influxDbInstanceId`<sup>Required</sup> <a name="influxDbInstanceId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.influxDbInstanceId"></a>

```typescript
public readonly influxDbInstanceId: string;
```

- *Type:* string

---

##### `logDeliveryConfiguration`<sup>Required</sup> <a name="logDeliveryConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.logDeliveryConfiguration"></a>

```typescript
public readonly logDeliveryConfiguration: DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference">DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference</a>

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference">DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `nextMaintenanceTime`<sup>Required</sup> <a name="nextMaintenanceTime" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.nextMaintenanceTime"></a>

```typescript
public readonly nextMaintenanceTime: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.publiclyAccessible"></a>

```typescript
public readonly publiclyAccessible: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `secondaryAvailabilityZone`<sup>Required</sup> <a name="secondaryAvailabilityZone" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.secondaryAvailabilityZone"></a>

```typescript
public readonly secondaryAvailabilityZone: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.tags"></a>

```typescript
public readonly tags: DataAwsccTimestreamInfluxDbInstanceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList">DataAwsccTimestreamInfluxDbInstanceTagsList</a>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `vpcSubnetIds`<sup>Required</sup> <a name="vpcSubnetIds" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.vpcSubnetIds"></a>

```typescript
public readonly vpcSubnetIds: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTimestreamInfluxDbInstanceConfig <a name="DataAwsccTimestreamInfluxDbInstanceConfig" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

const dataAwsccTimestreamInfluxDbInstanceConfig: dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/timestream_influx_db_instance#id DataAwsccTimestreamInfluxDbInstance#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfiguration <a name="DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfiguration.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

const dataAwsccTimestreamInfluxDbInstanceLogDeliveryConfiguration: dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfiguration = { ... }
```


### DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration <a name="DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

const dataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration: dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration = { ... }
```


### DataAwsccTimestreamInfluxDbInstanceMaintenanceSchedule <a name="DataAwsccTimestreamInfluxDbInstanceMaintenanceSchedule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceSchedule.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

const dataAwsccTimestreamInfluxDbInstanceMaintenanceSchedule: dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceSchedule = { ... }
```


### DataAwsccTimestreamInfluxDbInstanceTags <a name="DataAwsccTimestreamInfluxDbInstanceTags" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTags.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

const dataAwsccTimestreamInfluxDbInstanceTags: dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference <a name="DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

new dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration">s3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference">DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfiguration">DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Configuration`<sup>Required</sup> <a name="s3Configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```typescript
public readonly s3Configuration: DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference">DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfiguration">DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfiguration</a>

---


### DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference <a name="DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

new dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration">DataAwsccTimestreamInfluxDbInstanceLogDeliveryConfigurationS3Configuration</a>

---


### DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference <a name="DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

new dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceSchedule">DataAwsccTimestreamInfluxDbInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```typescript
public readonly preferredMaintenanceWindow: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTimestreamInfluxDbInstanceMaintenanceSchedule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceMaintenanceSchedule">DataAwsccTimestreamInfluxDbInstanceMaintenanceSchedule</a>

---


### DataAwsccTimestreamInfluxDbInstanceTagsList <a name="DataAwsccTimestreamInfluxDbInstanceTagsList" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

new dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccTimestreamInfluxDbInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccTimestreamInfluxDbInstanceTagsOutputReference <a name="DataAwsccTimestreamInfluxDbInstanceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccTimestreamInfluxDbInstance } from '@cdktn/provider-awscc'

new dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTags">DataAwsccTimestreamInfluxDbInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccTimestreamInfluxDbInstanceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbInstance.DataAwsccTimestreamInfluxDbInstanceTags">DataAwsccTimestreamInfluxDbInstanceTags</a>

---




# `dataAwsccSimspaceweaverSimulation` Submodule <a name="`dataAwsccSimspaceweaverSimulation` Submodule" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSimspaceweaverSimulation <a name="DataAwsccSimspaceweaverSimulation" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/simspaceweaver_simulation awscc_simspaceweaver_simulation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer"></a>

```typescript
import { dataAwsccSimspaceweaverSimulation } from '@cdktn/provider-awscc'

new dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation(scope: Construct, id: string, config: DataAwsccSimspaceweaverSimulationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig">DataAwsccSimspaceweaverSimulationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig">DataAwsccSimspaceweaverSimulationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSimspaceweaverSimulation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isConstruct"></a>

```typescript
import { dataAwsccSimspaceweaverSimulation } from '@cdktn/provider-awscc'

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformElement"></a>

```typescript
import { dataAwsccSimspaceweaverSimulation } from '@cdktn/provider-awscc'

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformDataSource"></a>

```typescript
import { dataAwsccSimspaceweaverSimulation } from '@cdktn/provider-awscc'

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport"></a>

```typescript
import { dataAwsccSimspaceweaverSimulation } from '@cdktn/provider-awscc'

dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSimspaceweaverSimulation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSimspaceweaverSimulation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSimspaceweaverSimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/simspaceweaver_simulation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSimspaceweaverSimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.describePayload">describePayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.maximumDuration">maximumDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.schemaS3Location">schemaS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.snapshotS3Location">snapshotS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `describePayload`<sup>Required</sup> <a name="describePayload" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.describePayload"></a>

```typescript
public readonly describePayload: string;
```

- *Type:* string

---

##### `maximumDuration`<sup>Required</sup> <a name="maximumDuration" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.maximumDuration"></a>

```typescript
public readonly maximumDuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `schemaS3Location`<sup>Required</sup> <a name="schemaS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.schemaS3Location"></a>

```typescript
public readonly schemaS3Location: DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference</a>

---

##### `snapshotS3Location`<sup>Required</sup> <a name="snapshotS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.snapshotS3Location"></a>

```typescript
public readonly snapshotS3Location: DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference">DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSimspaceweaverSimulationConfig <a name="DataAwsccSimspaceweaverSimulationConfig" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.Initializer"></a>

```typescript
import { dataAwsccSimspaceweaverSimulation } from '@cdktn/provider-awscc'

const dataAwsccSimspaceweaverSimulationConfig: dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/simspaceweaver_simulation#id DataAwsccSimspaceweaverSimulation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSimspaceweaverSimulationSchemaS3Location <a name="DataAwsccSimspaceweaverSimulationSchemaS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location.Initializer"></a>

```typescript
import { dataAwsccSimspaceweaverSimulation } from '@cdktn/provider-awscc'

const dataAwsccSimspaceweaverSimulationSchemaS3Location: dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location = { ... }
```


### DataAwsccSimspaceweaverSimulationSnapshotS3Location <a name="DataAwsccSimspaceweaverSimulationSnapshotS3Location" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location.Initializer"></a>

```typescript
import { dataAwsccSimspaceweaverSimulation } from '@cdktn/provider-awscc'

const dataAwsccSimspaceweaverSimulationSnapshotS3Location: dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference <a name="DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSimspaceweaverSimulation } from '@cdktn/provider-awscc'

new dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey">objectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location">DataAwsccSimspaceweaverSimulationSchemaS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `objectKey`<sup>Required</sup> <a name="objectKey" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey"></a>

```typescript
public readonly objectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSimspaceweaverSimulationSchemaS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSchemaS3Location">DataAwsccSimspaceweaverSimulationSchemaS3Location</a>

---


### DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference <a name="DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSimspaceweaverSimulation } from '@cdktn/provider-awscc'

new dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey">objectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location">DataAwsccSimspaceweaverSimulationSnapshotS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `objectKey`<sup>Required</sup> <a name="objectKey" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey"></a>

```typescript
public readonly objectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSimspaceweaverSimulationSnapshotS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSimspaceweaverSimulation.DataAwsccSimspaceweaverSimulationSnapshotS3Location">DataAwsccSimspaceweaverSimulationSnapshotS3Location</a>

---




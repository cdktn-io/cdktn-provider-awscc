# `dataAwsccEcsTaskDefinition` Submodule <a name="`dataAwsccEcsTaskDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcsTaskDefinition <a name="DataAwsccEcsTaskDefinition" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ecs_task_definition awscc_ecs_task_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition(scope: Construct, id: string, config: DataAwsccEcsTaskDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig">DataAwsccEcsTaskDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig">DataAwsccEcsTaskDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcsTaskDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isConstruct"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformElement"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformDataSource"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.generateConfigForImport"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEcsTaskDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEcsTaskDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEcsTaskDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ecs_task_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcsTaskDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.containerDefinitions">containerDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList">DataAwsccEcsTaskDefinitionContainerDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.cpu">cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.enableFaultInjection">enableFaultInjection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.ephemeralStorage">ephemeralStorage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference">DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.inferenceAccelerators">inferenceAccelerators</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList">DataAwsccEcsTaskDefinitionInferenceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.ipcMode">ipcMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.memory">memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.networkMode">networkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.pidMode">pidMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.placementConstraints">placementConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList">DataAwsccEcsTaskDefinitionPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.proxyConfiguration">proxyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference">DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.requiresCompatibilities">requiresCompatibilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.runtimePlatform">runtimePlatform</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference">DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList">DataAwsccEcsTaskDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.taskRoleArn">taskRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.volumes">volumes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList">DataAwsccEcsTaskDefinitionVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `containerDefinitions`<sup>Required</sup> <a name="containerDefinitions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.containerDefinitions"></a>

```typescript
public readonly containerDefinitions: DataAwsccEcsTaskDefinitionContainerDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList">DataAwsccEcsTaskDefinitionContainerDefinitionsList</a>

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.cpu"></a>

```typescript
public readonly cpu: string;
```

- *Type:* string

---

##### `enableFaultInjection`<sup>Required</sup> <a name="enableFaultInjection" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.enableFaultInjection"></a>

```typescript
public readonly enableFaultInjection: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ephemeralStorage`<sup>Required</sup> <a name="ephemeralStorage" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.ephemeralStorage"></a>

```typescript
public readonly ephemeralStorage: DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference">DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference</a>

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `inferenceAccelerators`<sup>Required</sup> <a name="inferenceAccelerators" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.inferenceAccelerators"></a>

```typescript
public readonly inferenceAccelerators: DataAwsccEcsTaskDefinitionInferenceAcceleratorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList">DataAwsccEcsTaskDefinitionInferenceAcceleratorsList</a>

---

##### `ipcMode`<sup>Required</sup> <a name="ipcMode" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.ipcMode"></a>

```typescript
public readonly ipcMode: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.memory"></a>

```typescript
public readonly memory: string;
```

- *Type:* string

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

---

##### `pidMode`<sup>Required</sup> <a name="pidMode" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.pidMode"></a>

```typescript
public readonly pidMode: string;
```

- *Type:* string

---

##### `placementConstraints`<sup>Required</sup> <a name="placementConstraints" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: DataAwsccEcsTaskDefinitionPlacementConstraintsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList">DataAwsccEcsTaskDefinitionPlacementConstraintsList</a>

---

##### `proxyConfiguration`<sup>Required</sup> <a name="proxyConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.proxyConfiguration"></a>

```typescript
public readonly proxyConfiguration: DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference">DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference</a>

---

##### `requiresCompatibilities`<sup>Required</sup> <a name="requiresCompatibilities" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.requiresCompatibilities"></a>

```typescript
public readonly requiresCompatibilities: string[];
```

- *Type:* string[]

---

##### `runtimePlatform`<sup>Required</sup> <a name="runtimePlatform" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.runtimePlatform"></a>

```typescript
public readonly runtimePlatform: DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference">DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.tags"></a>

```typescript
public readonly tags: DataAwsccEcsTaskDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList">DataAwsccEcsTaskDefinitionTagsList</a>

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.taskDefinitionArn"></a>

```typescript
public readonly taskDefinitionArn: string;
```

- *Type:* string

---

##### `taskRoleArn`<sup>Required</sup> <a name="taskRoleArn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.taskRoleArn"></a>

```typescript
public readonly taskRoleArn: string;
```

- *Type:* string

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.volumes"></a>

```typescript
public readonly volumes: DataAwsccEcsTaskDefinitionVolumesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList">DataAwsccEcsTaskDefinitionVolumesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcsTaskDefinitionConfig <a name="DataAwsccEcsTaskDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionConfig: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ecs_task_definition#id DataAwsccEcsTaskDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcsTaskDefinitionContainerDefinitions <a name="DataAwsccEcsTaskDefinitionContainerDefinitions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitions.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitions: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitions = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsSecrets: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsUlimits: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits = { ... }
```


### DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom = { ... }
```


### DataAwsccEcsTaskDefinitionEphemeralStorage <a name="DataAwsccEcsTaskDefinitionEphemeralStorage" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorage.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionEphemeralStorage: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorage = { ... }
```


### DataAwsccEcsTaskDefinitionInferenceAccelerators <a name="DataAwsccEcsTaskDefinitionInferenceAccelerators" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAccelerators.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionInferenceAccelerators: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAccelerators = { ... }
```


### DataAwsccEcsTaskDefinitionPlacementConstraints <a name="DataAwsccEcsTaskDefinitionPlacementConstraints" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraints.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionPlacementConstraints: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraints = { ... }
```


### DataAwsccEcsTaskDefinitionProxyConfiguration <a name="DataAwsccEcsTaskDefinitionProxyConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfiguration.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionProxyConfiguration: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfiguration = { ... }
```


### DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties <a name="DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties = { ... }
```


### DataAwsccEcsTaskDefinitionRuntimePlatform <a name="DataAwsccEcsTaskDefinitionRuntimePlatform" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatform.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionRuntimePlatform: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatform = { ... }
```


### DataAwsccEcsTaskDefinitionTags <a name="DataAwsccEcsTaskDefinitionTags" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTags.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionTags: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTags = { ... }
```


### DataAwsccEcsTaskDefinitionVolumes <a name="DataAwsccEcsTaskDefinitionVolumes" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumes.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionVolumes: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumes = { ... }
```


### DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration <a name="DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration = { ... }
```


### DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration <a name="DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration = { ... }
```


### DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig <a name="DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig = { ... }
```


### DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration <a name="DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration = { ... }
```


### DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig <a name="DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig = { ... }
```


### DataAwsccEcsTaskDefinitionVolumesHost <a name="DataAwsccEcsTaskDefinitionVolumesHost" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHost.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionVolumesHost: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHost = { ... }
```


### DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration <a name="DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

const dataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration: dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn">DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn">DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOn</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFiles</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironment</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts">DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts">DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHosts</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.options">options</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration">DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.options"></a>

```typescript
public readonly options: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration">DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfiguration</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.startPeriod">startPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck">DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `startPeriod`<sup>Required</sup> <a name="startPeriod" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.startPeriod"></a>

```typescript
public readonly startPeriod: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck">DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheck</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.add">add</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.drop">drop</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.add"></a>

```typescript
public readonly add: string[];
```

- *Type:* string[]

---

##### `drop`<sup>Required</sup> <a name="drop" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.drop"></a>

```typescript
public readonly drop: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilities</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.containerPath">containerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.hostPath">hostPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.hostPath"></a>

```typescript
public readonly hostPath: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevices</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.capabilities">capabilities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.devices">devices</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.initProcessEnabled">initProcessEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.maxSwap">maxSwap</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.sharedMemorySize">sharedMemorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.swappiness">swappiness</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.tmpfs">tmpfs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.capabilities"></a>

```typescript
public readonly capabilities: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesOutputReference</a>

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.devices"></a>

```typescript
public readonly devices: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList</a>

---

##### `initProcessEnabled`<sup>Required</sup> <a name="initProcessEnabled" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.initProcessEnabled"></a>

```typescript
public readonly initProcessEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `maxSwap`<sup>Required</sup> <a name="maxSwap" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.maxSwap"></a>

```typescript
public readonly maxSwap: number;
```

- *Type:* number

---

##### `sharedMemorySize`<sup>Required</sup> <a name="sharedMemorySize" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.sharedMemorySize"></a>

```typescript
public readonly sharedMemorySize: number;
```

- *Type:* number

---

##### `swappiness`<sup>Required</sup> <a name="swappiness" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.swappiness"></a>

```typescript
public readonly swappiness: number;
```

- *Type:* number

---

##### `tmpfs`<sup>Required</sup> <a name="tmpfs" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.tmpfs"></a>

```typescript
public readonly tmpfs: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParameters</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.containerPath">containerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.mountOptions">mountOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string[];
```

- *Type:* string[]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfs</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.logDriver">logDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.options">options</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.secretOptions">secretOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logDriver`<sup>Required</sup> <a name="logDriver" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.logDriver"></a>

```typescript
public readonly logDriver: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.options"></a>

```typescript
public readonly options: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `secretOptions`<sup>Required</sup> <a name="secretOptions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.secretOptions"></a>

```typescript
public readonly secretOptions: DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfiguration</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.valueFrom">valueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptions</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.containerPath">containerPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.readOnly">readOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.sourceVolume">sourceVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints">DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerPath`<sup>Required</sup> <a name="containerPath" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.containerPath"></a>

```typescript
public readonly containerPath: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sourceVolume`<sup>Required</sup> <a name="sourceVolume" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.sourceVolume"></a>

```typescript
public readonly sourceVolume: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints">DataAwsccEcsTaskDefinitionContainerDefinitionsMountPoints</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.credentialSpecs">credentialSpecs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dependsOn">dependsOn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList">DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.disableNetworking">disableNetworking</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dnsSearchDomains">dnsSearchDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dockerLabels">dockerLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dockerSecurityOptions">dockerSecurityOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.entryPoint">entryPoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.environmentFiles">environmentFiles</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.essential">essential</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.extraHosts">extraHosts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList">DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.firelensConfiguration">firelensConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.interactive">interactive</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.links">links</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.linuxParameters">linuxParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.logConfiguration">logConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.mountPoints">mountPoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList">DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.portMappings">portMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList">DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.privileged">privileged</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.pseudoTerminal">pseudoTerminal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.readonlyRootFilesystem">readonlyRootFilesystem</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.repositoryCredentials">repositoryCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.resourceRequirements">resourceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList">DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.restartPolicy">restartPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.secrets">secrets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList">DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.startTimeout">startTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.stopTimeout">stopTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.systemControls">systemControls</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList">DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.ulimits">ulimits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList">DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.versionConsistency">versionConsistency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.volumesFrom">volumesFrom</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList">DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitions">DataAwsccEcsTaskDefinitionContainerDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `credentialSpecs`<sup>Required</sup> <a name="credentialSpecs" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.credentialSpecs"></a>

```typescript
public readonly credentialSpecs: string[];
```

- *Type:* string[]

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList">DataAwsccEcsTaskDefinitionContainerDefinitionsDependsOnList</a>

---

##### `disableNetworking`<sup>Required</sup> <a name="disableNetworking" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.disableNetworking"></a>

```typescript
public readonly disableNetworking: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dnsSearchDomains`<sup>Required</sup> <a name="dnsSearchDomains" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dnsSearchDomains"></a>

```typescript
public readonly dnsSearchDomains: string[];
```

- *Type:* string[]

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

---

##### `dockerLabels`<sup>Required</sup> <a name="dockerLabels" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dockerLabels"></a>

```typescript
public readonly dockerLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `dockerSecurityOptions`<sup>Required</sup> <a name="dockerSecurityOptions" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.dockerSecurityOptions"></a>

```typescript
public readonly dockerSecurityOptions: string[];
```

- *Type:* string[]

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.entryPoint"></a>

```typescript
public readonly entryPoint: string[];
```

- *Type:* string[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.environment"></a>

```typescript
public readonly environment: DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentList</a>

---

##### `environmentFiles`<sup>Required</sup> <a name="environmentFiles" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.environmentFiles"></a>

```typescript
public readonly environmentFiles: DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList">DataAwsccEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList</a>

---

##### `essential`<sup>Required</sup> <a name="essential" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.essential"></a>

```typescript
public readonly essential: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `extraHosts`<sup>Required</sup> <a name="extraHosts" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.extraHosts"></a>

```typescript
public readonly extraHosts: DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList">DataAwsccEcsTaskDefinitionContainerDefinitionsExtraHostsList</a>

---

##### `firelensConfiguration`<sup>Required</sup> <a name="firelensConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.firelensConfiguration"></a>

```typescript
public readonly firelensConfiguration: DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsFirelensConfigurationOutputReference</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.healthCheck"></a>

```typescript
public readonly healthCheck: DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsHealthCheckOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `interactive`<sup>Required</sup> <a name="interactive" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.interactive"></a>

```typescript
public readonly interactive: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.links"></a>

```typescript
public readonly links: string[];
```

- *Type:* string[]

---

##### `linuxParameters`<sup>Required</sup> <a name="linuxParameters" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.linuxParameters"></a>

```typescript
public readonly linuxParameters: DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsLinuxParametersOutputReference</a>

---

##### `logConfiguration`<sup>Required</sup> <a name="logConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.logConfiguration"></a>

```typescript
public readonly logConfiguration: DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsLogConfigurationOutputReference</a>

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

---

##### `mountPoints`<sup>Required</sup> <a name="mountPoints" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.mountPoints"></a>

```typescript
public readonly mountPoints: DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList">DataAwsccEcsTaskDefinitionContainerDefinitionsMountPointsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portMappings`<sup>Required</sup> <a name="portMappings" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.portMappings"></a>

```typescript
public readonly portMappings: DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList">DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList</a>

---

##### `privileged`<sup>Required</sup> <a name="privileged" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.privileged"></a>

```typescript
public readonly privileged: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `pseudoTerminal`<sup>Required</sup> <a name="pseudoTerminal" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.pseudoTerminal"></a>

```typescript
public readonly pseudoTerminal: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `readonlyRootFilesystem`<sup>Required</sup> <a name="readonlyRootFilesystem" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.readonlyRootFilesystem"></a>

```typescript
public readonly readonlyRootFilesystem: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `repositoryCredentials`<sup>Required</sup> <a name="repositoryCredentials" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.repositoryCredentials"></a>

```typescript
public readonly repositoryCredentials: DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference</a>

---

##### `resourceRequirements`<sup>Required</sup> <a name="resourceRequirements" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.resourceRequirements"></a>

```typescript
public readonly resourceRequirements: DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList">DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList</a>

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference">DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.secrets"></a>

```typescript
public readonly secrets: DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList">DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList</a>

---

##### `startTimeout`<sup>Required</sup> <a name="startTimeout" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.startTimeout"></a>

```typescript
public readonly startTimeout: number;
```

- *Type:* number

---

##### `stopTimeout`<sup>Required</sup> <a name="stopTimeout" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.stopTimeout"></a>

```typescript
public readonly stopTimeout: number;
```

- *Type:* number

---

##### `systemControls`<sup>Required</sup> <a name="systemControls" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.systemControls"></a>

```typescript
public readonly systemControls: DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList">DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList</a>

---

##### `ulimits`<sup>Required</sup> <a name="ulimits" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.ulimits"></a>

```typescript
public readonly ulimits: DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList">DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `versionConsistency`<sup>Required</sup> <a name="versionConsistency" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.versionConsistency"></a>

```typescript
public readonly versionConsistency: string;
```

- *Type:* string

---

##### `volumesFrom`<sup>Required</sup> <a name="volumesFrom" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.volumesFrom"></a>

```typescript
public readonly volumesFrom: DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList">DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList</a>

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitions">DataAwsccEcsTaskDefinitionContainerDefinitions</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.appProtocol">appProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.containerPortRange">containerPortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.hostPort">hostPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings">DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appProtocol`<sup>Required</sup> <a name="appProtocol" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.appProtocol"></a>

```typescript
public readonly appProtocol: string;
```

- *Type:* string

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `containerPortRange`<sup>Required</sup> <a name="containerPortRange" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.containerPortRange"></a>

```typescript
public readonly containerPortRange: string;
```

- *Type:* string

---

##### `hostPort`<sup>Required</sup> <a name="hostPort" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.hostPort"></a>

```typescript
public readonly hostPort: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings">DataAwsccEcsTaskDefinitionContainerDefinitionsPortMappings</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.credentialsParameter">credentialsParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials">DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```typescript
public readonly credentialsParameter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials">DataAwsccEcsTaskDefinitionContainerDefinitionsRepositoryCredentials</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements">DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements">DataAwsccEcsTaskDefinitionContainerDefinitionsResourceRequirements</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.ignoredExitCodes">ignoredExitCodes</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.restartAttemptPeriod">restartAttemptPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy">DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ignoredExitCodes`<sup>Required</sup> <a name="ignoredExitCodes" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.ignoredExitCodes"></a>

```typescript
public readonly ignoredExitCodes: number[];
```

- *Type:* number[]

---

##### `restartAttemptPeriod`<sup>Required</sup> <a name="restartAttemptPeriod" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.restartAttemptPeriod"></a>

```typescript
public readonly restartAttemptPeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy">DataAwsccEcsTaskDefinitionContainerDefinitionsRestartPolicy</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.valueFrom">valueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets">DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets">DataAwsccEcsTaskDefinitionContainerDefinitionsSecrets</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls">DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls">DataAwsccEcsTaskDefinitionContainerDefinitionsSystemControls</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.hardLimit">hardLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.softLimit">softLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits">DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hardLimit`<sup>Required</sup> <a name="hardLimit" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.hardLimit"></a>

```typescript
public readonly hardLimit: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `softLimit`<sup>Required</sup> <a name="softLimit" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.softLimit"></a>

```typescript
public readonly softLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits">DataAwsccEcsTaskDefinitionContainerDefinitionsUlimits</a>

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference <a name="DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.readOnly">readOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.sourceContainer">sourceContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom">DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.readOnly"></a>

```typescript
public readonly readOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sourceContainer`<sup>Required</sup> <a name="sourceContainer" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.sourceContainer"></a>

```typescript
public readonly sourceContainer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom">DataAwsccEcsTaskDefinitionContainerDefinitionsVolumesFrom</a>

---


### DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference <a name="DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGiB">sizeInGiB</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorage">DataAwsccEcsTaskDefinitionEphemeralStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sizeInGiB`<sup>Required</sup> <a name="sizeInGiB" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.sizeInGiB"></a>

```typescript
public readonly sizeInGiB: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionEphemeralStorage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionEphemeralStorage">DataAwsccEcsTaskDefinitionEphemeralStorage</a>

---


### DataAwsccEcsTaskDefinitionInferenceAcceleratorsList <a name="DataAwsccEcsTaskDefinitionInferenceAcceleratorsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference <a name="DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.deviceType">deviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAccelerators">DataAwsccEcsTaskDefinitionInferenceAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAcceleratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionInferenceAccelerators;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionInferenceAccelerators">DataAwsccEcsTaskDefinitionInferenceAccelerators</a>

---


### DataAwsccEcsTaskDefinitionPlacementConstraintsList <a name="DataAwsccEcsTaskDefinitionPlacementConstraintsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference <a name="DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraints">DataAwsccEcsTaskDefinitionPlacementConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionPlacementConstraints;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionPlacementConstraints">DataAwsccEcsTaskDefinitionPlacementConstraints</a>

---


### DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.proxyConfigurationProperties">proxyConfigurationProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList">DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfiguration">DataAwsccEcsTaskDefinitionProxyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `proxyConfigurationProperties`<sup>Required</sup> <a name="proxyConfigurationProperties" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.proxyConfigurationProperties"></a>

```typescript
public readonly proxyConfigurationProperties: DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList">DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionProxyConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfiguration">DataAwsccEcsTaskDefinitionProxyConfiguration</a>

---


### DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList <a name="DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference <a name="DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties">DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties">DataAwsccEcsTaskDefinitionProxyConfigurationProxyConfigurationProperties</a>

---


### DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference <a name="DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitecture">cpuArchitecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamily">operatingSystemFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatform">DataAwsccEcsTaskDefinitionRuntimePlatform</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuArchitecture`<sup>Required</sup> <a name="cpuArchitecture" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.cpuArchitecture"></a>

```typescript
public readonly cpuArchitecture: string;
```

- *Type:* string

---

##### `operatingSystemFamily`<sup>Required</sup> <a name="operatingSystemFamily" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.operatingSystemFamily"></a>

```typescript
public readonly operatingSystemFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatformOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionRuntimePlatform;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionRuntimePlatform">DataAwsccEcsTaskDefinitionRuntimePlatform</a>

---


### DataAwsccEcsTaskDefinitionTagsList <a name="DataAwsccEcsTaskDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionTagsOutputReference <a name="DataAwsccEcsTaskDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTags">DataAwsccEcsTaskDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionTags">DataAwsccEcsTaskDefinitionTags</a>

---


### DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.autoprovision">autoprovision</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.driver">driver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.driverOpts">driverOpts</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoprovision`<sup>Required</sup> <a name="autoprovision" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.autoprovision"></a>

```typescript
public readonly autoprovision: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.driver"></a>

```typescript
public readonly driver: string;
```

- *Type:* string

---

##### `driverOpts`<sup>Required</sup> <a name="driverOpts" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.driverOpts"></a>

```typescript
public readonly driverOpts: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfiguration</a>

---


### DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointId">accessPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iam">iam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessPointId`<sup>Required</sup> <a name="accessPointId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.accessPointId"></a>

```typescript
public readonly accessPointId: string;
```

- *Type:* string

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.iam"></a>

```typescript
public readonly iam: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfig</a>

---


### DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.filesystemId">filesystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.rootDirectory">rootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.transitEncryption">transitEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.transitEncryptionPort">transitEncryptionPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference</a>

---

##### `filesystemId`<sup>Required</sup> <a name="filesystemId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.filesystemId"></a>

```typescript
public readonly filesystemId: string;
```

- *Type:* string

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: string;
```

- *Type:* string

---

##### `transitEncryption`<sup>Required</sup> <a name="transitEncryption" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.transitEncryption"></a>

```typescript
public readonly transitEncryption: string;
```

- *Type:* string

---

##### `transitEncryptionPort`<sup>Required</sup> <a name="transitEncryptionPort" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.transitEncryptionPort"></a>

```typescript
public readonly transitEncryptionPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfiguration</a>

---


### DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameter">credentialsParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.credentialsParameter"></a>

```typescript
public readonly credentialsParameter: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfig</a>

---


### DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfig">authorizationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectory">rootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationConfig`<sup>Required</sup> <a name="authorizationConfig" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference</a>

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfiguration</a>

---


### DataAwsccEcsTaskDefinitionVolumesHostOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesHostOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.sourcePath">sourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHost">DataAwsccEcsTaskDefinitionVolumesHost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourcePath`<sup>Required</sup> <a name="sourcePath" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.sourcePath"></a>

```typescript
public readonly sourcePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionVolumesHost;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHost">DataAwsccEcsTaskDefinitionVolumesHost</a>

---


### DataAwsccEcsTaskDefinitionVolumesList <a name="DataAwsccEcsTaskDefinitionVolumesList" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.get"></a>

```typescript
public get(index: number): DataAwsccEcsTaskDefinitionVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEcsTaskDefinitionVolumesOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.configuredAtLaunch">configuredAtLaunch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.dockerVolumeConfiguration">dockerVolumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.efsVolumeConfiguration">efsVolumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.fsxWindowsFileServerVolumeConfiguration">fsxWindowsFileServerVolumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.host">host</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference">DataAwsccEcsTaskDefinitionVolumesHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.s3FilesVolumeConfiguration">s3FilesVolumeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumes">DataAwsccEcsTaskDefinitionVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configuredAtLaunch`<sup>Required</sup> <a name="configuredAtLaunch" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.configuredAtLaunch"></a>

```typescript
public readonly configuredAtLaunch: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dockerVolumeConfiguration`<sup>Required</sup> <a name="dockerVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.dockerVolumeConfiguration"></a>

```typescript
public readonly dockerVolumeConfiguration: DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesDockerVolumeConfigurationOutputReference</a>

---

##### `efsVolumeConfiguration`<sup>Required</sup> <a name="efsVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.efsVolumeConfiguration"></a>

```typescript
public readonly efsVolumeConfiguration: DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesEfsVolumeConfigurationOutputReference</a>

---

##### `fsxWindowsFileServerVolumeConfiguration`<sup>Required</sup> <a name="fsxWindowsFileServerVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.fsxWindowsFileServerVolumeConfiguration"></a>

```typescript
public readonly fsxWindowsFileServerVolumeConfiguration: DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesFsxWindowsFileServerVolumeConfigurationOutputReference</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.host"></a>

```typescript
public readonly host: DataAwsccEcsTaskDefinitionVolumesHostOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesHostOutputReference">DataAwsccEcsTaskDefinitionVolumesHostOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `s3FilesVolumeConfiguration`<sup>Required</sup> <a name="s3FilesVolumeConfiguration" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.s3FilesVolumeConfiguration"></a>

```typescript
public readonly s3FilesVolumeConfiguration: DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference">DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionVolumes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumes">DataAwsccEcsTaskDefinitionVolumes</a>

---


### DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference <a name="DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEcsTaskDefinition } from '@cdktn/provider-awscc'

new dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.accessPointArn">accessPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.fileSystemArn">fileSystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.rootDirectory">rootDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.transitEncryptionPort">transitEncryptionPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessPointArn`<sup>Required</sup> <a name="accessPointArn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.accessPointArn"></a>

```typescript
public readonly accessPointArn: string;
```

- *Type:* string

---

##### `fileSystemArn`<sup>Required</sup> <a name="fileSystemArn" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.fileSystemArn"></a>

```typescript
public readonly fileSystemArn: string;
```

- *Type:* string

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: string;
```

- *Type:* string

---

##### `transitEncryptionPort`<sup>Required</sup> <a name="transitEncryptionPort" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.transitEncryptionPort"></a>

```typescript
public readonly transitEncryptionPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsTaskDefinition.DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration">DataAwsccEcsTaskDefinitionVolumesS3FilesVolumeConfiguration</a>

---




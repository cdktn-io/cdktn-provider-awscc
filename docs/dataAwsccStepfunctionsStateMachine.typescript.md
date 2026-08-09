# `dataAwsccStepfunctionsStateMachine` Submodule <a name="`dataAwsccStepfunctionsStateMachine` Submodule" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccStepfunctionsStateMachine <a name="DataAwsccStepfunctionsStateMachine" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/stepfunctions_state_machine awscc_stepfunctions_state_machine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

new dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine(scope: Construct, id: string, config: DataAwsccStepfunctionsStateMachineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig">DataAwsccStepfunctionsStateMachineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig">DataAwsccStepfunctionsStateMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccStepfunctionsStateMachine resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.isConstruct"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.isTerraformElement"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.isTerraformDataSource"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.generateConfigForImport"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccStepfunctionsStateMachine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccStepfunctionsStateMachine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccStepfunctionsStateMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/stepfunctions_state_machine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccStepfunctionsStateMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.definition">definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.definitionS3Location">definitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference">DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.definitionString">definitionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.definitionSubstitutions">definitionSubstitutions</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference">DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.stateMachineType">stateMachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList">DataAwsccStepfunctionsStateMachineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.tracingConfiguration">tracingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference">DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

---

##### `definitionS3Location`<sup>Required</sup> <a name="definitionS3Location" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.definitionS3Location"></a>

```typescript
public readonly definitionS3Location: DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference">DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference</a>

---

##### `definitionString`<sup>Required</sup> <a name="definitionString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.definitionString"></a>

```typescript
public readonly definitionString: string;
```

- *Type:* string

---

##### `definitionSubstitutions`<sup>Required</sup> <a name="definitionSubstitutions" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.definitionSubstitutions"></a>

```typescript
public readonly definitionSubstitutions: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference">DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

---

##### `stateMachineType`<sup>Required</sup> <a name="stateMachineType" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.stateMachineType"></a>

```typescript
public readonly stateMachineType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.tags"></a>

```typescript
public readonly tags: DataAwsccStepfunctionsStateMachineTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList">DataAwsccStepfunctionsStateMachineTagsList</a>

---

##### `tracingConfiguration`<sup>Required</sup> <a name="tracingConfiguration" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.tracingConfiguration"></a>

```typescript
public readonly tracingConfiguration: DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference">DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccStepfunctionsStateMachineConfig <a name="DataAwsccStepfunctionsStateMachineConfig" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

const dataAwsccStepfunctionsStateMachineConfig: dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/stepfunctions_state_machine#id DataAwsccStepfunctionsStateMachine#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccStepfunctionsStateMachineDefinitionS3Location <a name="DataAwsccStepfunctionsStateMachineDefinitionS3Location" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3Location.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

const dataAwsccStepfunctionsStateMachineDefinitionS3Location: dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3Location = { ... }
```


### DataAwsccStepfunctionsStateMachineLoggingConfiguration <a name="DataAwsccStepfunctionsStateMachineLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfiguration.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

const dataAwsccStepfunctionsStateMachineLoggingConfiguration: dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfiguration = { ... }
```


### DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations <a name="DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

const dataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations: dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations = { ... }
```


### DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup <a name="DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

const dataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup: dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup = { ... }
```


### DataAwsccStepfunctionsStateMachineTags <a name="DataAwsccStepfunctionsStateMachineTags" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTags.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

const dataAwsccStepfunctionsStateMachineTags: dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTags = { ... }
```


### DataAwsccStepfunctionsStateMachineTracingConfiguration <a name="DataAwsccStepfunctionsStateMachineTracingConfiguration" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfiguration.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

const dataAwsccStepfunctionsStateMachineTracingConfiguration: dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference <a name="DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

new dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3Location">DataAwsccStepfunctionsStateMachineDefinitionS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccStepfunctionsStateMachineDefinitionS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineDefinitionS3Location">DataAwsccStepfunctionsStateMachineDefinitionS3Location</a>

---


### DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference <a name="DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

new dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup">DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroup</a>

---


### DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList <a name="DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

new dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.get"></a>

```typescript
public get(index: number): DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference <a name="DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

new dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroup">cloudwatchLogsLogGroup</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference">DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations">DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsLogGroup`<sup>Required</sup> <a name="cloudwatchLogsLogGroup" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsLogGroup"></a>

```typescript
public readonly cloudwatchLogsLogGroup: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference">DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsCloudwatchLogsLogGroupOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations">DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinations</a>

---


### DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference <a name="DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

new dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList">DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionData">includeExecutionData</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfiguration">DataAwsccStepfunctionsStateMachineLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.property.destinations"></a>

```typescript
public readonly destinations: DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList">DataAwsccStepfunctionsStateMachineLoggingConfigurationDestinationsList</a>

---

##### `includeExecutionData`<sup>Required</sup> <a name="includeExecutionData" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.property.includeExecutionData"></a>

```typescript
public readonly includeExecutionData: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccStepfunctionsStateMachineLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineLoggingConfiguration">DataAwsccStepfunctionsStateMachineLoggingConfiguration</a>

---


### DataAwsccStepfunctionsStateMachineTagsList <a name="DataAwsccStepfunctionsStateMachineTagsList" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

new dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.get"></a>

```typescript
public get(index: number): DataAwsccStepfunctionsStateMachineTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccStepfunctionsStateMachineTagsOutputReference <a name="DataAwsccStepfunctionsStateMachineTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

new dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTags">DataAwsccStepfunctionsStateMachineTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccStepfunctionsStateMachineTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTags">DataAwsccStepfunctionsStateMachineTags</a>

---


### DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference <a name="DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachine } from '@cdktn/provider-awscc'

new dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfiguration">DataAwsccStepfunctionsStateMachineTracingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccStepfunctionsStateMachineTracingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachine.DataAwsccStepfunctionsStateMachineTracingConfiguration">DataAwsccStepfunctionsStateMachineTracingConfiguration</a>

---




# `configConfigurationRecorder` Submodule <a name="`configConfigurationRecorder` Submodule" id="@cdktn/provider-awscc.configConfigurationRecorder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConfigurationRecorder <a name="ConfigConfigurationRecorder" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder awscc_config_configuration_recorder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

new configConfigurationRecorder.ConfigConfigurationRecorder(scope: Construct, id: string, config: ConfigConfigurationRecorderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig">ConfigConfigurationRecorderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig">ConfigConfigurationRecorderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup">putRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode">putRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingGroup">resetRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingMode">resetRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetStartedOnCreate">resetStartedOnCreate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRecordingGroup` <a name="putRecordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup"></a>

```typescript
public putRecordingGroup(value: ConfigConfigurationRecorderRecordingGroup): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

---

##### `putRecordingMode` <a name="putRecordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode"></a>

```typescript
public putRecordingMode(value: ConfigConfigurationRecorderRecordingMode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.putRecordingMode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRecordingGroup` <a name="resetRecordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingGroup"></a>

```typescript
public resetRecordingGroup(): void
```

##### `resetRecordingMode` <a name="resetRecordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetRecordingMode"></a>

```typescript
public resetRecordingMode(): void
```

##### `resetStartedOnCreate` <a name="resetStartedOnCreate" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.resetStartedOnCreate"></a>

```typescript
public resetStartedOnCreate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigConfigurationRecorder resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConfigConfigurationRecorder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigConfigurationRecorder to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigConfigurationRecorder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConfigurationRecorder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroup">recordingGroup</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference">ConfigConfigurationRecorderRecordingGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingMode">recordingMode</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference">ConfigConfigurationRecorderRecordingModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroupInput">recordingGroupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingModeInput">recordingModeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreateInput">startedOnCreateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreate">startedOnCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `recordingGroup`<sup>Required</sup> <a name="recordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroup"></a>

```typescript
public readonly recordingGroup: ConfigConfigurationRecorderRecordingGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference">ConfigConfigurationRecorderRecordingGroupOutputReference</a>

---

##### `recordingMode`<sup>Required</sup> <a name="recordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingMode"></a>

```typescript
public readonly recordingMode: ConfigConfigurationRecorderRecordingModeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference">ConfigConfigurationRecorderRecordingModeOutputReference</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recordingGroupInput`<sup>Optional</sup> <a name="recordingGroupInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingGroupInput"></a>

```typescript
public readonly recordingGroupInput: IResolvable | ConfigConfigurationRecorderRecordingGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

---

##### `recordingModeInput`<sup>Optional</sup> <a name="recordingModeInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.recordingModeInput"></a>

```typescript
public readonly recordingModeInput: IResolvable | ConfigConfigurationRecorderRecordingMode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `startedOnCreateInput`<sup>Optional</sup> <a name="startedOnCreateInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreateInput"></a>

```typescript
public readonly startedOnCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `startedOnCreate`<sup>Required</sup> <a name="startedOnCreate" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.startedOnCreate"></a>

```typescript
public readonly startedOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorder.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConfigurationRecorderConfig <a name="ConfigConfigurationRecorderConfig" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.Initializer"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

const configConfigurationRecorderConfig: configConfigurationRecorder.ConfigConfigurationRecorderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.name">name</a></code> | <code>string</code> | The name of the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingGroup">recordingGroup</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | Specifies which resource types are in scope for the configuration recorder to record. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingMode">recordingMode</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | Specifies the default recording frequency for the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.startedOnCreate">startedOnCreate</a></code> | <code>boolean \| cdktn.IResolvable</code> | Defaults to 'true'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the configuration recorder.

By default, AWS Config assigns the name "default" when creating the configuration recorder. To change the configuration recorder name, you must use the DeleteConfigurationRecorder action to delete your current configuration recorder, and then you must use the PutConfigurationRecorder command to create a configuration recorder that has the desired name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#name ConfigConfigurationRecorder#name}

---

##### `recordingGroup`<sup>Optional</sup> <a name="recordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingGroup"></a>

```typescript
public readonly recordingGroup: ConfigConfigurationRecorderRecordingGroup;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

Specifies which resource types are in scope for the configuration recorder to record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_group ConfigConfigurationRecorder#recording_group}

---

##### `recordingMode`<sup>Optional</sup> <a name="recordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.recordingMode"></a>

```typescript
public readonly recordingMode: ConfigConfigurationRecorderRecordingMode;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

Specifies the default recording frequency for the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_mode ConfigConfigurationRecorder#recording_mode}

---

##### `startedOnCreate`<sup>Optional</sup> <a name="startedOnCreate" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderConfig.property.startedOnCreate"></a>

```typescript
public readonly startedOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Defaults to 'true'.

Controls whether the recorder starts recording after the create operation. Set this to 'false' for development and testing purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#started_on_create ConfigConfigurationRecorder#started_on_create}

---

### ConfigConfigurationRecorderRecordingGroup <a name="ConfigConfigurationRecorderRecordingGroup" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.Initializer"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

const configConfigurationRecorderRecordingGroup: configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.allSupported">allSupported</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.exclusionByResourceTypes">exclusionByResourceTypes</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a></code> | An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.includeGlobalResourceTypes">includeGlobalResourceTypes</a></code> | <code>boolean \| cdktn.IResolvable</code> | This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.recordingStrategy">recordingStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a></code> | An object that specifies the recording strategy for the configuration recorder. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | A comma-separated list that specifies which resource types AWS Config records. |

---

##### `allSupported`<sup>Optional</sup> <a name="allSupported" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.allSupported"></a>

```typescript
public readonly allSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}

---

##### `exclusionByResourceTypes`<sup>Optional</sup> <a name="exclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.exclusionByResourceTypes"></a>

```typescript
public readonly exclusionByResourceTypes: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#exclusion_by_resource_types ConfigConfigurationRecorder#exclusion_by_resource_types}

---

##### `includeGlobalResourceTypes`<sup>Optional</sup> <a name="includeGlobalResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.includeGlobalResourceTypes"></a>

```typescript
public readonly includeGlobalResourceTypes: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}

---

##### `recordingStrategy`<sup>Optional</sup> <a name="recordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.recordingStrategy"></a>

```typescript
public readonly recordingStrategy: ConfigConfigurationRecorderRecordingGroupRecordingStrategy;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

An object that specifies the recording strategy for the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_strategy ConfigConfigurationRecorder#recording_strategy}

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

A comma-separated list that specifies which resource types AWS Config records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

### ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes <a name="ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.Initializer"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

const configConfigurationRecorderRecordingGroupExclusionByResourceTypes: configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | A comma-separated list of resource types to exclude from recording by the configuration recorder. |

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

A comma-separated list of resource types to exclude from recording by the configuration recorder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

### ConfigConfigurationRecorderRecordingGroupRecordingStrategy <a name="ConfigConfigurationRecorderRecordingGroupRecordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.Initializer"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

const configConfigurationRecorderRecordingGroupRecordingStrategy: configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.property.useOnly">useOnly</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}. |

---

##### `useOnly`<sup>Optional</sup> <a name="useOnly" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy.property.useOnly"></a>

```typescript
public readonly useOnly: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#use_only ConfigConfigurationRecorder#use_only}.

---

### ConfigConfigurationRecorderRecordingMode <a name="ConfigConfigurationRecorderRecordingMode" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.Initializer"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

const configConfigurationRecorderRecordingMode: configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingFrequency">recordingFrequency</a></code> | <code>string</code> | The default recording frequency that AWS Config uses to record configuration changes. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingModeOverrides">recordingModeOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>[]</code> | An array of 'RecordingModeOverride' objects for you to specify your overrides for the recording mode. |

---

##### `recordingFrequency`<sup>Optional</sup> <a name="recordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingFrequency"></a>

```typescript
public readonly recordingFrequency: string;
```

- *Type:* string

The default recording frequency that AWS Config uses to record configuration changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}

---

##### `recordingModeOverrides`<sup>Optional</sup> <a name="recordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode.property.recordingModeOverrides"></a>

```typescript
public readonly recordingModeOverrides: IResolvable | ConfigConfigurationRecorderRecordingModeRecordingModeOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>[]

An array of 'RecordingModeOverride' objects for you to specify your overrides for the recording mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_mode_overrides ConfigConfigurationRecorder#recording_mode_overrides}

---

### ConfigConfigurationRecorderRecordingModeRecordingModeOverrides <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.Initializer"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

const configConfigurationRecorderRecordingModeRecordingModeOverrides: configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.description">description</a></code> | <code>string</code> | A description that you provide for the override. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.recordingFrequency">recordingFrequency</a></code> | <code>string</code> | The recording frequency that will be applied to all the resource types specified in the override. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | A comma-separated list that specifies which resource types AWS Config includes in the override. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description that you provide for the override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#description ConfigConfigurationRecorder#description}

---

##### `recordingFrequency`<sup>Optional</sup> <a name="recordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.recordingFrequency"></a>

```typescript
public readonly recordingFrequency: string;
```

- *Type:* string

The recording frequency that will be applied to all the resource types specified in the override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#recording_frequency ConfigConfigurationRecorder#recording_frequency}

---

##### `resourceTypes`<sup>Optional</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

A comma-separated list that specifies which resource types AWS Config includes in the override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference <a name="ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

new configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

---


### ConfigConfigurationRecorderRecordingGroupOutputReference <a name="ConfigConfigurationRecorderRecordingGroupOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

new configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes">putExclusionByResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy">putRecordingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetAllSupported">resetAllSupported</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetExclusionByResourceTypes">resetExclusionByResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetIncludeGlobalResourceTypes">resetIncludeGlobalResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetRecordingStrategy">resetRecordingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusionByResourceTypes` <a name="putExclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes"></a>

```typescript
public putExclusionByResourceTypes(value: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putExclusionByResourceTypes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

---

##### `putRecordingStrategy` <a name="putRecordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy"></a>

```typescript
public putRecordingStrategy(value: ConfigConfigurationRecorderRecordingGroupRecordingStrategy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.putRecordingStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

---

##### `resetAllSupported` <a name="resetAllSupported" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetAllSupported"></a>

```typescript
public resetAllSupported(): void
```

##### `resetExclusionByResourceTypes` <a name="resetExclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetExclusionByResourceTypes"></a>

```typescript
public resetExclusionByResourceTypes(): void
```

##### `resetIncludeGlobalResourceTypes` <a name="resetIncludeGlobalResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetIncludeGlobalResourceTypes"></a>

```typescript
public resetIncludeGlobalResourceTypes(): void
```

##### `resetRecordingStrategy` <a name="resetRecordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetRecordingStrategy"></a>

```typescript
public resetRecordingStrategy(): void
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypes">exclusionByResourceTypes</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategy">recordingStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference">ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupportedInput">allSupportedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypesInput">exclusionByResourceTypesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypesInput">includeGlobalResourceTypesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategyInput">recordingStrategyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupported">allSupported</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypes">includeGlobalResourceTypes</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclusionByResourceTypes`<sup>Required</sup> <a name="exclusionByResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypes"></a>

```typescript
public readonly exclusionByResourceTypes: ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypesOutputReference</a>

---

##### `recordingStrategy`<sup>Required</sup> <a name="recordingStrategy" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategy"></a>

```typescript
public readonly recordingStrategy: ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference">ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference</a>

---

##### `allSupportedInput`<sup>Optional</sup> <a name="allSupportedInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupportedInput"></a>

```typescript
public readonly allSupportedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `exclusionByResourceTypesInput`<sup>Optional</sup> <a name="exclusionByResourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.exclusionByResourceTypesInput"></a>

```typescript
public readonly exclusionByResourceTypesInput: IResolvable | ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes">ConfigConfigurationRecorderRecordingGroupExclusionByResourceTypes</a>

---

##### `includeGlobalResourceTypesInput`<sup>Optional</sup> <a name="includeGlobalResourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypesInput"></a>

```typescript
public readonly includeGlobalResourceTypesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `recordingStrategyInput`<sup>Optional</sup> <a name="recordingStrategyInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.recordingStrategyInput"></a>

```typescript
public readonly recordingStrategyInput: IResolvable | ConfigConfigurationRecorderRecordingGroupRecordingStrategy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `allSupported`<sup>Required</sup> <a name="allSupported" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.allSupported"></a>

```typescript
public readonly allSupported: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeGlobalResourceTypes`<sup>Required</sup> <a name="includeGlobalResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.includeGlobalResourceTypes"></a>

```typescript
public readonly includeGlobalResourceTypes: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConfigurationRecorderRecordingGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroup">ConfigConfigurationRecorderRecordingGroup</a>

---


### ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference <a name="ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

new configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resetUseOnly">resetUseOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUseOnly` <a name="resetUseOnly" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.resetUseOnly"></a>

```typescript
public resetUseOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnlyInput">useOnlyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnly">useOnly</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `useOnlyInput`<sup>Optional</sup> <a name="useOnlyInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnlyInput"></a>

```typescript
public readonly useOnlyInput: string;
```

- *Type:* string

---

##### `useOnly`<sup>Required</sup> <a name="useOnly" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.useOnly"></a>

```typescript
public readonly useOnly: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConfigurationRecorderRecordingGroupRecordingStrategy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingGroupRecordingStrategy">ConfigConfigurationRecorderRecordingGroupRecordingStrategy</a>

---


### ConfigConfigurationRecorderRecordingModeOutputReference <a name="ConfigConfigurationRecorderRecordingModeOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

new configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverrides">putRecordingModeOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingFrequency">resetRecordingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingModeOverrides">resetRecordingModeOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecordingModeOverrides` <a name="putRecordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverrides"></a>

```typescript
public putRecordingModeOverrides(value: IResolvable | ConfigConfigurationRecorderRecordingModeRecordingModeOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.putRecordingModeOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>[]

---

##### `resetRecordingFrequency` <a name="resetRecordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingFrequency"></a>

```typescript
public resetRecordingFrequency(): void
```

##### `resetRecordingModeOverrides` <a name="resetRecordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.resetRecordingModeOverrides"></a>

```typescript
public resetRecordingModeOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverrides">recordingModeOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList">ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequencyInput">recordingFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverridesInput">recordingModeOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequency">recordingFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordingModeOverrides`<sup>Required</sup> <a name="recordingModeOverrides" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverrides"></a>

```typescript
public readonly recordingModeOverrides: ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList">ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList</a>

---

##### `recordingFrequencyInput`<sup>Optional</sup> <a name="recordingFrequencyInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequencyInput"></a>

```typescript
public readonly recordingFrequencyInput: string;
```

- *Type:* string

---

##### `recordingModeOverridesInput`<sup>Optional</sup> <a name="recordingModeOverridesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingModeOverridesInput"></a>

```typescript
public readonly recordingModeOverridesInput: IResolvable | ConfigConfigurationRecorderRecordingModeRecordingModeOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>[]

---

##### `recordingFrequency`<sup>Required</sup> <a name="recordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.recordingFrequency"></a>

```typescript
public readonly recordingFrequency: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConfigurationRecorderRecordingMode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingMode">ConfigConfigurationRecorderRecordingMode</a>

---


### ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

new configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get"></a>

```typescript
public get(index: number): ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConfigurationRecorderRecordingModeRecordingModeOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>[]

---


### ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference <a name="ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer"></a>

```typescript
import { configConfigurationRecorder } from '@cdktn/provider-awscc'

new configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetRecordingFrequency">resetRecordingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetResourceTypes">resetResourceTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRecordingFrequency` <a name="resetRecordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetRecordingFrequency"></a>

```typescript
public resetRecordingFrequency(): void
```

##### `resetResourceTypes` <a name="resetResourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.resetResourceTypes"></a>

```typescript
public resetResourceTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequencyInput">recordingFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypesInput">resourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequency">recordingFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypes">resourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `recordingFrequencyInput`<sup>Optional</sup> <a name="recordingFrequencyInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequencyInput"></a>

```typescript
public readonly recordingFrequencyInput: string;
```

- *Type:* string

---

##### `resourceTypesInput`<sup>Optional</sup> <a name="resourceTypesInput" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypesInput"></a>

```typescript
public readonly resourceTypesInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `recordingFrequency`<sup>Required</sup> <a name="recordingFrequency" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.recordingFrequency"></a>

```typescript
public readonly recordingFrequency: string;
```

- *Type:* string

---

##### `resourceTypes`<sup>Required</sup> <a name="resourceTypes" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.resourceTypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigConfigurationRecorderRecordingModeRecordingModeOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configConfigurationRecorder.ConfigConfigurationRecorderRecordingModeRecordingModeOverrides">ConfigConfigurationRecorderRecordingModeRecordingModeOverrides</a>

---




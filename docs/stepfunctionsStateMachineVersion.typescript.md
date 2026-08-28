# `stepfunctionsStateMachineVersion` Submodule <a name="`stepfunctionsStateMachineVersion` Submodule" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StepfunctionsStateMachineVersion <a name="StepfunctionsStateMachineVersion" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine_version awscc_stepfunctions_state_machine_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer"></a>

```typescript
import { stepfunctionsStateMachineVersion } from '@cdktn/provider-awscc'

new stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion(scope: Construct, id: string, config: StepfunctionsStateMachineVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig">StepfunctionsStateMachineVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig">StepfunctionsStateMachineVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.resetStateMachineRevisionId">resetStateMachineRevisionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetStateMachineRevisionId` <a name="resetStateMachineRevisionId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.resetStateMachineRevisionId"></a>

```typescript
public resetStateMachineRevisionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a StepfunctionsStateMachineVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isConstruct"></a>

```typescript
import { stepfunctionsStateMachineVersion } from '@cdktn/provider-awscc'

stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformElement"></a>

```typescript
import { stepfunctionsStateMachineVersion } from '@cdktn/provider-awscc'

stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformResource"></a>

```typescript
import { stepfunctionsStateMachineVersion } from '@cdktn/provider-awscc'

stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.generateConfigForImport"></a>

```typescript
import { stepfunctionsStateMachineVersion } from '@cdktn/provider-awscc'

stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a StepfunctionsStateMachineVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StepfunctionsStateMachineVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StepfunctionsStateMachineVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the StepfunctionsStateMachineVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineArnInput">stateMachineArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineRevisionIdInput">stateMachineRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineArn">stateMachineArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineRevisionId">stateMachineRevisionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `stateMachineArnInput`<sup>Optional</sup> <a name="stateMachineArnInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineArnInput"></a>

```typescript
public readonly stateMachineArnInput: string;
```

- *Type:* string

---

##### `stateMachineRevisionIdInput`<sup>Optional</sup> <a name="stateMachineRevisionIdInput" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineRevisionIdInput"></a>

```typescript
public readonly stateMachineRevisionIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineArn"></a>

```typescript
public readonly stateMachineArn: string;
```

- *Type:* string

---

##### `stateMachineRevisionId`<sup>Required</sup> <a name="stateMachineRevisionId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.stateMachineRevisionId"></a>

```typescript
public readonly stateMachineRevisionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StepfunctionsStateMachineVersionConfig <a name="StepfunctionsStateMachineVersionConfig" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.Initializer"></a>

```typescript
import { stepfunctionsStateMachineVersion } from '@cdktn/provider-awscc'

const stepfunctionsStateMachineVersionConfig: stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.stateMachineArn">stateMachineArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine_version#state_machine_arn StepfunctionsStateMachineVersion#state_machine_arn}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine_version#description StepfunctionsStateMachineVersion#description}. |
| <code><a href="#@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.stateMachineRevisionId">stateMachineRevisionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine_version#state_machine_revision_id StepfunctionsStateMachineVersion#state_machine_revision_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.stateMachineArn"></a>

```typescript
public readonly stateMachineArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine_version#state_machine_arn StepfunctionsStateMachineVersion#state_machine_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine_version#description StepfunctionsStateMachineVersion#description}.

---

##### `stateMachineRevisionId`<sup>Optional</sup> <a name="stateMachineRevisionId" id="@cdktn/provider-awscc.stepfunctionsStateMachineVersion.StepfunctionsStateMachineVersionConfig.property.stateMachineRevisionId"></a>

```typescript
public readonly stateMachineRevisionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/stepfunctions_state_machine_version#state_machine_revision_id StepfunctionsStateMachineVersion#state_machine_revision_id}.

---




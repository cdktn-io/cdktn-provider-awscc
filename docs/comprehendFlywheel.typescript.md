# `comprehendFlywheel` Submodule <a name="`comprehendFlywheel` Submodule" id="@cdktn/provider-awscc.comprehendFlywheel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendFlywheel <a name="ComprehendFlywheel" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel awscc_comprehend_flywheel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

new comprehendFlywheel.ComprehendFlywheel(scope: Construct, id: string, config: ComprehendFlywheelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig">ComprehendFlywheelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig">ComprehendFlywheelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig">putDataSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig">putTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetActiveModelArn">resetActiveModelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetDataSecurityConfig">resetDataSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetModelType">resetModelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTaskConfig">resetTaskConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSecurityConfig` <a name="putDataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig"></a>

```typescript
public putDataSecurityConfig(value: ComprehendFlywheelDataSecurityConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags"></a>

```typescript
public putTags(value: IResolvable | ComprehendFlywheelTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]

---

##### `putTaskConfig` <a name="putTaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig"></a>

```typescript
public putTaskConfig(value: ComprehendFlywheelTaskConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

---

##### `resetActiveModelArn` <a name="resetActiveModelArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetActiveModelArn"></a>

```typescript
public resetActiveModelArn(): void
```

##### `resetDataSecurityConfig` <a name="resetDataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetDataSecurityConfig"></a>

```typescript
public resetDataSecurityConfig(): void
```

##### `resetModelType` <a name="resetModelType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetModelType"></a>

```typescript
public resetModelType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTaskConfig` <a name="resetTaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTaskConfig"></a>

```typescript
public resetTaskConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComprehendFlywheel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

comprehendFlywheel.ComprehendFlywheel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

comprehendFlywheel.ComprehendFlywheel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

comprehendFlywheel.ComprehendFlywheel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

comprehendFlywheel.ComprehendFlywheel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComprehendFlywheel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComprehendFlywheel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComprehendFlywheel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendFlywheel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfig">dataSecurityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference">ComprehendFlywheelDataSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList">ComprehendFlywheelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfig">taskConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference">ComprehendFlywheelTaskConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArnInput">activeModelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArnInput">dataAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3UriInput">dataLakeS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfigInput">dataSecurityConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelNameInput">flywheelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelTypeInput">modelTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfigInput">taskConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArn">activeModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3Uri">dataLakeS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelName">flywheelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelType">modelType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataSecurityConfig`<sup>Required</sup> <a name="dataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfig"></a>

```typescript
public readonly dataSecurityConfig: ComprehendFlywheelDataSecurityConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference">ComprehendFlywheelDataSecurityConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tags"></a>

```typescript
public readonly tags: ComprehendFlywheelTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList">ComprehendFlywheelTagsList</a>

---

##### `taskConfig`<sup>Required</sup> <a name="taskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfig"></a>

```typescript
public readonly taskConfig: ComprehendFlywheelTaskConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference">ComprehendFlywheelTaskConfigOutputReference</a>

---

##### `activeModelArnInput`<sup>Optional</sup> <a name="activeModelArnInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArnInput"></a>

```typescript
public readonly activeModelArnInput: string;
```

- *Type:* string

---

##### `dataAccessRoleArnInput`<sup>Optional</sup> <a name="dataAccessRoleArnInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArnInput"></a>

```typescript
public readonly dataAccessRoleArnInput: string;
```

- *Type:* string

---

##### `dataLakeS3UriInput`<sup>Optional</sup> <a name="dataLakeS3UriInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3UriInput"></a>

```typescript
public readonly dataLakeS3UriInput: string;
```

- *Type:* string

---

##### `dataSecurityConfigInput`<sup>Optional</sup> <a name="dataSecurityConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfigInput"></a>

```typescript
public readonly dataSecurityConfigInput: IResolvable | ComprehendFlywheelDataSecurityConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

---

##### `flywheelNameInput`<sup>Optional</sup> <a name="flywheelNameInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelNameInput"></a>

```typescript
public readonly flywheelNameInput: string;
```

- *Type:* string

---

##### `modelTypeInput`<sup>Optional</sup> <a name="modelTypeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelTypeInput"></a>

```typescript
public readonly modelTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ComprehendFlywheelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]

---

##### `taskConfigInput`<sup>Optional</sup> <a name="taskConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfigInput"></a>

```typescript
public readonly taskConfigInput: IResolvable | ComprehendFlywheelTaskConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

---

##### `activeModelArn`<sup>Required</sup> <a name="activeModelArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArn"></a>

```typescript
public readonly activeModelArn: string;
```

- *Type:* string

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

---

##### `dataLakeS3Uri`<sup>Required</sup> <a name="dataLakeS3Uri" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3Uri"></a>

```typescript
public readonly dataLakeS3Uri: string;
```

- *Type:* string

---

##### `flywheelName`<sup>Required</sup> <a name="flywheelName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelName"></a>

```typescript
public readonly flywheelName: string;
```

- *Type:* string

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendFlywheelConfig <a name="ComprehendFlywheelConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

const comprehendFlywheelConfig: comprehendFlywheel.ComprehendFlywheelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataAccessRoleArn">dataAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataLakeS3Uri">dataLakeS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.flywheelName">flywheelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.activeModelArn">activeModelArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataSecurityConfig">dataSecurityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.modelType">modelType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.taskConfig">taskConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataAccessRoleArn`<sup>Required</sup> <a name="dataAccessRoleArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataAccessRoleArn"></a>

```typescript
public readonly dataAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}.

---

##### `dataLakeS3Uri`<sup>Required</sup> <a name="dataLakeS3Uri" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataLakeS3Uri"></a>

```typescript
public readonly dataLakeS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}.

---

##### `flywheelName`<sup>Required</sup> <a name="flywheelName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.flywheelName"></a>

```typescript
public readonly flywheelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}.

---

##### `activeModelArn`<sup>Optional</sup> <a name="activeModelArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.activeModelArn"></a>

```typescript
public readonly activeModelArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}.

---

##### `dataSecurityConfig`<sup>Optional</sup> <a name="dataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataSecurityConfig"></a>

```typescript
public readonly dataSecurityConfig: ComprehendFlywheelDataSecurityConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}.

---

##### `modelType`<sup>Optional</sup> <a name="modelType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ComprehendFlywheelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}.

---

##### `taskConfig`<sup>Optional</sup> <a name="taskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.taskConfig"></a>

```typescript
public readonly taskConfig: ComprehendFlywheelTaskConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}.

---

### ComprehendFlywheelDataSecurityConfig <a name="ComprehendFlywheelDataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

const comprehendFlywheelDataSecurityConfig: comprehendFlywheel.ComprehendFlywheelDataSecurityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.dataLakeKmsKeyId">dataLakeKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#data_lake_kms_key_id ComprehendFlywheel#data_lake_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.modelKmsKeyId">modelKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#model_kms_key_id ComprehendFlywheel#model_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#volume_kms_key_id ComprehendFlywheel#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#vpc_config ComprehendFlywheel#vpc_config}. |

---

##### `dataLakeKmsKeyId`<sup>Optional</sup> <a name="dataLakeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.dataLakeKmsKeyId"></a>

```typescript
public readonly dataLakeKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#data_lake_kms_key_id ComprehendFlywheel#data_lake_kms_key_id}.

---

##### `modelKmsKeyId`<sup>Optional</sup> <a name="modelKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.modelKmsKeyId"></a>

```typescript
public readonly modelKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#model_kms_key_id ComprehendFlywheel#model_kms_key_id}.

---

##### `volumeKmsKeyId`<sup>Optional</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#volume_kms_key_id ComprehendFlywheel#volume_kms_key_id}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: ComprehendFlywheelDataSecurityConfigVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#vpc_config ComprehendFlywheel#vpc_config}.

---

### ComprehendFlywheelDataSecurityConfigVpcConfig <a name="ComprehendFlywheelDataSecurityConfigVpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

const comprehendFlywheelDataSecurityConfigVpcConfig: comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#security_group_ids ComprehendFlywheel#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#subnets ComprehendFlywheel#subnets}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#security_group_ids ComprehendFlywheel#security_group_ids}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#subnets ComprehendFlywheel#subnets}.

---

### ComprehendFlywheelTags <a name="ComprehendFlywheelTags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

const comprehendFlywheelTags: comprehendFlywheel.ComprehendFlywheelTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#key ComprehendFlywheel#key}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#value ComprehendFlywheel#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#key ComprehendFlywheel#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#value ComprehendFlywheel#value}.

---

### ComprehendFlywheelTaskConfig <a name="ComprehendFlywheelTaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

const comprehendFlywheelTaskConfig: comprehendFlywheel.ComprehendFlywheelTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.documentClassificationConfig">documentClassificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#document_classification_config ComprehendFlywheel#document_classification_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.entityRecognitionConfig">entityRecognitionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#entity_recognition_config ComprehendFlywheel#entity_recognition_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.languageCode">languageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#language_code ComprehendFlywheel#language_code}. |

---

##### `documentClassificationConfig`<sup>Optional</sup> <a name="documentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.documentClassificationConfig"></a>

```typescript
public readonly documentClassificationConfig: ComprehendFlywheelTaskConfigDocumentClassificationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#document_classification_config ComprehendFlywheel#document_classification_config}.

---

##### `entityRecognitionConfig`<sup>Optional</sup> <a name="entityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.entityRecognitionConfig"></a>

```typescript
public readonly entityRecognitionConfig: ComprehendFlywheelTaskConfigEntityRecognitionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#entity_recognition_config ComprehendFlywheel#entity_recognition_config}.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#language_code ComprehendFlywheel#language_code}.

---

### ComprehendFlywheelTaskConfigDocumentClassificationConfig <a name="ComprehendFlywheelTaskConfigDocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

const comprehendFlywheelTaskConfigDocumentClassificationConfig: comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.labels">labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#labels ComprehendFlywheel#labels}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#mode ComprehendFlywheel#mode}. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#labels ComprehendFlywheel#labels}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#mode ComprehendFlywheel#mode}.

---

### ComprehendFlywheelTaskConfigEntityRecognitionConfig <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

const comprehendFlywheelTaskConfigEntityRecognitionConfig: comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.property.entityTypes">entityTypes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#entity_types ComprehendFlywheel#entity_types}. |

---

##### `entityTypes`<sup>Optional</sup> <a name="entityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.property.entityTypes"></a>

```typescript
public readonly entityTypes: IResolvable | ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#entity_types ComprehendFlywheel#entity_types}.

---

### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

const comprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes: comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#type ComprehendFlywheel#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_flywheel#type ComprehendFlywheel#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendFlywheelDataSecurityConfigOutputReference <a name="ComprehendFlywheelDataSecurityConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

new comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetDataLakeKmsKeyId">resetDataLakeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetModelKmsKeyId">resetModelKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVolumeKmsKeyId">resetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig"></a>

```typescript
public putVpcConfig(value: ComprehendFlywheelDataSecurityConfigVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

---

##### `resetDataLakeKmsKeyId` <a name="resetDataLakeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetDataLakeKmsKeyId"></a>

```typescript
public resetDataLakeKmsKeyId(): void
```

##### `resetModelKmsKeyId` <a name="resetModelKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetModelKmsKeyId"></a>

```typescript
public resetModelKmsKeyId(): void
```

##### `resetVolumeKmsKeyId` <a name="resetVolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVolumeKmsKeyId"></a>

```typescript
public resetVolumeKmsKeyId(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference">ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyIdInput">dataLakeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyIdInput">modelKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyIdInput">volumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyId">dataLakeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyId">modelKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyId">volumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference">ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference</a>

---

##### `dataLakeKmsKeyIdInput`<sup>Optional</sup> <a name="dataLakeKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyIdInput"></a>

```typescript
public readonly dataLakeKmsKeyIdInput: string;
```

- *Type:* string

---

##### `modelKmsKeyIdInput`<sup>Optional</sup> <a name="modelKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyIdInput"></a>

```typescript
public readonly modelKmsKeyIdInput: string;
```

- *Type:* string

---

##### `volumeKmsKeyIdInput`<sup>Optional</sup> <a name="volumeKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```typescript
public readonly volumeKmsKeyIdInput: string;
```

- *Type:* string

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: IResolvable | ComprehendFlywheelDataSecurityConfigVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

---

##### `dataLakeKmsKeyId`<sup>Required</sup> <a name="dataLakeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyId"></a>

```typescript
public readonly dataLakeKmsKeyId: string;
```

- *Type:* string

---

##### `modelKmsKeyId`<sup>Required</sup> <a name="modelKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyId"></a>

```typescript
public readonly modelKmsKeyId: string;
```

- *Type:* string

---

##### `volumeKmsKeyId`<sup>Required</sup> <a name="volumeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyId"></a>

```typescript
public readonly volumeKmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendFlywheelDataSecurityConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

---


### ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference <a name="ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

new comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSubnets"></a>

```typescript
public resetSubnets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendFlywheelDataSecurityConfigVpcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

---


### ComprehendFlywheelTagsList <a name="ComprehendFlywheelTagsList" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

new comprehendFlywheel.ComprehendFlywheelTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get"></a>

```typescript
public get(index: number): ComprehendFlywheelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendFlywheelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]

---


### ComprehendFlywheelTagsOutputReference <a name="ComprehendFlywheelTagsOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

new comprehendFlywheel.ComprehendFlywheelTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendFlywheelTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>

---


### ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference <a name="ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

new comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labelsInput">labelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: string[];
```

- *Type:* string[]

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendFlywheelTaskConfigDocumentClassificationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

new comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get"></a>

```typescript
public get(index: number): ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

new comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

new comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes">putEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resetEntityTypes">resetEntityTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityTypes` <a name="putEntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes"></a>

```typescript
public putEntityTypes(value: IResolvable | ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]

---

##### `resetEntityTypes` <a name="resetEntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resetEntityTypes"></a>

```typescript
public resetEntityTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypes">entityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypesInput">entityTypesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityTypes`<sup>Required</sup> <a name="entityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypes"></a>

```typescript
public readonly entityTypes: ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList</a>

---

##### `entityTypesInput`<sup>Optional</sup> <a name="entityTypesInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypesInput"></a>

```typescript
public readonly entityTypesInput: IResolvable | ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendFlywheelTaskConfigEntityRecognitionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

---


### ComprehendFlywheelTaskConfigOutputReference <a name="ComprehendFlywheelTaskConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer"></a>

```typescript
import { comprehendFlywheel } from '@cdktn/provider-awscc'

new comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig">putDocumentClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig">putEntityRecognitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetDocumentClassificationConfig">resetDocumentClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetEntityRecognitionConfig">resetEntityRecognitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDocumentClassificationConfig` <a name="putDocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig"></a>

```typescript
public putDocumentClassificationConfig(value: ComprehendFlywheelTaskConfigDocumentClassificationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

---

##### `putEntityRecognitionConfig` <a name="putEntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig"></a>

```typescript
public putEntityRecognitionConfig(value: ComprehendFlywheelTaskConfigEntityRecognitionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

---

##### `resetDocumentClassificationConfig` <a name="resetDocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetDocumentClassificationConfig"></a>

```typescript
public resetDocumentClassificationConfig(): void
```

##### `resetEntityRecognitionConfig` <a name="resetEntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetEntityRecognitionConfig"></a>

```typescript
public resetEntityRecognitionConfig(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfig">documentClassificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference">ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfig">entityRecognitionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference">ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfigInput">documentClassificationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfigInput">entityRecognitionConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `documentClassificationConfig`<sup>Required</sup> <a name="documentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfig"></a>

```typescript
public readonly documentClassificationConfig: ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference">ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference</a>

---

##### `entityRecognitionConfig`<sup>Required</sup> <a name="entityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfig"></a>

```typescript
public readonly entityRecognitionConfig: ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference">ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference</a>

---

##### `documentClassificationConfigInput`<sup>Optional</sup> <a name="documentClassificationConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfigInput"></a>

```typescript
public readonly documentClassificationConfigInput: IResolvable | ComprehendFlywheelTaskConfigDocumentClassificationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

---

##### `entityRecognitionConfigInput`<sup>Optional</sup> <a name="entityRecognitionConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfigInput"></a>

```typescript
public readonly entityRecognitionConfigInput: IResolvable | ComprehendFlywheelTaskConfigEntityRecognitionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendFlywheelTaskConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

---




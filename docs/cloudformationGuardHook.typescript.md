# `cloudformationGuardHook` Submodule <a name="`cloudformationGuardHook` Submodule" id="@cdktn/provider-awscc.cloudformationGuardHook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationGuardHook <a name="CloudformationGuardHook" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook awscc_cloudformation_guard_hook}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

new cloudformationGuardHook.CloudformationGuardHook(scope: Construct, id: string, config: CloudformationGuardHookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig">CloudformationGuardHookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig">CloudformationGuardHookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putRuleLocation">putRuleLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters">putStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters">putTargetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetFailureMode">resetFailureMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetHookStatus">resetHookStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetLogBucket">resetLogBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetStackFilters">resetStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetTargetFilters">resetTargetFilters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putOptions"></a>

```typescript
public putOptions(value: CloudformationGuardHookOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

---

##### `putRuleLocation` <a name="putRuleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putRuleLocation"></a>

```typescript
public putRuleLocation(value: CloudformationGuardHookRuleLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putRuleLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

---

##### `putStackFilters` <a name="putStackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters"></a>

```typescript
public putStackFilters(value: CloudformationGuardHookStackFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putStackFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

---

##### `putTargetFilters` <a name="putTargetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters"></a>

```typescript
public putTargetFilters(value: CloudformationGuardHookTargetFilters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.putTargetFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

---

##### `resetFailureMode` <a name="resetFailureMode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetFailureMode"></a>

```typescript
public resetFailureMode(): void
```

##### `resetHookStatus` <a name="resetHookStatus" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetHookStatus"></a>

```typescript
public resetHookStatus(): void
```

##### `resetLogBucket` <a name="resetLogBucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetLogBucket"></a>

```typescript
public resetLogBucket(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetStackFilters` <a name="resetStackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetStackFilters"></a>

```typescript
public resetStackFilters(): void
```

##### `resetTargetFilters` <a name="resetTargetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.resetTargetFilters"></a>

```typescript
public resetTargetFilters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationGuardHook resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isConstruct"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

cloudformationGuardHook.CloudformationGuardHook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformElement"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

cloudformationGuardHook.CloudformationGuardHook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformResource"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

cloudformationGuardHook.CloudformationGuardHook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudformationGuardHook resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudformationGuardHook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudformationGuardHook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationGuardHook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookArn">hookArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference">CloudformationGuardHookOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocation">ruleLocation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference">CloudformationGuardHookRuleLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFilters">stackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference">CloudformationGuardHookStackFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFilters">targetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference">CloudformationGuardHookTargetFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureModeInput">failureModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatusInput">hookStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucketInput">logBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.optionsInput">optionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocationInput">ruleLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFiltersInput">stackFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFiltersInput">targetFiltersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperationsInput">targetOperationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureMode">failureMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatus">hookStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucket">logBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperations">targetOperations</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hookArn`<sup>Required</sup> <a name="hookArn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookArn"></a>

```typescript
public readonly hookArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.options"></a>

```typescript
public readonly options: CloudformationGuardHookOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference">CloudformationGuardHookOptionsOutputReference</a>

---

##### `ruleLocation`<sup>Required</sup> <a name="ruleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocation"></a>

```typescript
public readonly ruleLocation: CloudformationGuardHookRuleLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference">CloudformationGuardHookRuleLocationOutputReference</a>

---

##### `stackFilters`<sup>Required</sup> <a name="stackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFilters"></a>

```typescript
public readonly stackFilters: CloudformationGuardHookStackFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference">CloudformationGuardHookStackFiltersOutputReference</a>

---

##### `targetFilters`<sup>Required</sup> <a name="targetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFilters"></a>

```typescript
public readonly targetFilters: CloudformationGuardHookTargetFiltersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference">CloudformationGuardHookTargetFiltersOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `failureModeInput`<sup>Optional</sup> <a name="failureModeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureModeInput"></a>

```typescript
public readonly failureModeInput: string;
```

- *Type:* string

---

##### `hookStatusInput`<sup>Optional</sup> <a name="hookStatusInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatusInput"></a>

```typescript
public readonly hookStatusInput: string;
```

- *Type:* string

---

##### `logBucketInput`<sup>Optional</sup> <a name="logBucketInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucketInput"></a>

```typescript
public readonly logBucketInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.optionsInput"></a>

```typescript
public readonly optionsInput: IResolvable | CloudformationGuardHookOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

---

##### `ruleLocationInput`<sup>Optional</sup> <a name="ruleLocationInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.ruleLocationInput"></a>

```typescript
public readonly ruleLocationInput: IResolvable | CloudformationGuardHookRuleLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

---

##### `stackFiltersInput`<sup>Optional</sup> <a name="stackFiltersInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.stackFiltersInput"></a>

```typescript
public readonly stackFiltersInput: IResolvable | CloudformationGuardHookStackFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

---

##### `targetFiltersInput`<sup>Optional</sup> <a name="targetFiltersInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetFiltersInput"></a>

```typescript
public readonly targetFiltersInput: IResolvable | CloudformationGuardHookTargetFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

---

##### `targetOperationsInput`<sup>Optional</sup> <a name="targetOperationsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperationsInput"></a>

```typescript
public readonly targetOperationsInput: string[];
```

- *Type:* string[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `failureMode`<sup>Required</sup> <a name="failureMode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.failureMode"></a>

```typescript
public readonly failureMode: string;
```

- *Type:* string

---

##### `hookStatus`<sup>Required</sup> <a name="hookStatus" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.hookStatus"></a>

```typescript
public readonly hookStatus: string;
```

- *Type:* string

---

##### `logBucket`<sup>Required</sup> <a name="logBucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.logBucket"></a>

```typescript
public readonly logBucket: string;
```

- *Type:* string

---

##### `targetOperations`<sup>Required</sup> <a name="targetOperations" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.targetOperations"></a>

```typescript
public readonly targetOperations: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationGuardHookConfig <a name="CloudformationGuardHookConfig" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

const cloudformationGuardHookConfig: cloudformationGuardHook.CloudformationGuardHookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.alias">alias</a></code> | <code>string</code> | The typename alias for the hook. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.executionRole">executionRole</a></code> | <code>string</code> | The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.ruleLocation">ruleLocation</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a></code> | S3 Source Location for the Guard files. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetOperations">targetOperations</a></code> | <code>string[]</code> | Which operations should this Hook run against? Resource changes, stacks or change sets. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.failureMode">failureMode</a></code> | <code>string</code> | Attribute to specify CloudFormation behavior on hook failure. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.hookStatus">hookStatus</a></code> | <code>string</code> | Attribute to specify which stacks this hook applies to or should get invoked for. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.logBucket">logBucket</a></code> | <code>string</code> | S3 Bucket where the guard validate report will be uploaded to. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#options CloudformationGuardHook#options}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.stackFilters">stackFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a></code> | Filters to allow hooks to target specific stack attributes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetFilters">targetFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a></code> | Attribute to specify which targets should invoke the hook. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

The typename alias for the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#alias CloudformationGuardHook#alias}

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#execution_role CloudformationGuardHook#execution_role}

---

##### `ruleLocation`<sup>Required</sup> <a name="ruleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.ruleLocation"></a>

```typescript
public readonly ruleLocation: CloudformationGuardHookRuleLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

S3 Source Location for the Guard files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#rule_location CloudformationGuardHook#rule_location}

---

##### `targetOperations`<sup>Required</sup> <a name="targetOperations" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetOperations"></a>

```typescript
public readonly targetOperations: string[];
```

- *Type:* string[]

Which operations should this Hook run against? Resource changes, stacks or change sets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_operations CloudformationGuardHook#target_operations}

---

##### `failureMode`<sup>Optional</sup> <a name="failureMode" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.failureMode"></a>

```typescript
public readonly failureMode: string;
```

- *Type:* string

Attribute to specify CloudFormation behavior on hook failure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#failure_mode CloudformationGuardHook#failure_mode}

---

##### `hookStatus`<sup>Optional</sup> <a name="hookStatus" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.hookStatus"></a>

```typescript
public readonly hookStatus: string;
```

- *Type:* string

Attribute to specify which stacks this hook applies to or should get invoked for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#hook_status CloudformationGuardHook#hook_status}

---

##### `logBucket`<sup>Optional</sup> <a name="logBucket" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.logBucket"></a>

```typescript
public readonly logBucket: string;
```

- *Type:* string

S3 Bucket where the guard validate report will be uploaded to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#log_bucket CloudformationGuardHook#log_bucket}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.options"></a>

```typescript
public readonly options: CloudformationGuardHookOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#options CloudformationGuardHook#options}.

---

##### `stackFilters`<sup>Optional</sup> <a name="stackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.stackFilters"></a>

```typescript
public readonly stackFilters: CloudformationGuardHookStackFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

Filters to allow hooks to target specific stack attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#stack_filters CloudformationGuardHook#stack_filters}

---

##### `targetFilters`<sup>Optional</sup> <a name="targetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookConfig.property.targetFilters"></a>

```typescript
public readonly targetFilters: CloudformationGuardHookTargetFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

Attribute to specify which targets should invoke the hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_filters CloudformationGuardHook#target_filters}

---

### CloudformationGuardHookOptions <a name="CloudformationGuardHookOptions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

const cloudformationGuardHookOptions: cloudformationGuardHook.CloudformationGuardHookOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions.property.inputParams">inputParams</a></code> | <code>string</code> | Specifies the S3 location of input parameter files for your Guard rules. |

---

##### `inputParams`<sup>Optional</sup> <a name="inputParams" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions.property.inputParams"></a>

```typescript
public readonly inputParams: string;
```

- *Type:* string

Specifies the S3 location of input parameter files for your Guard rules.

You can specify either a single S3 location or an array of up to 10 S3 locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#input_params CloudformationGuardHook#input_params}

---

### CloudformationGuardHookRuleLocation <a name="CloudformationGuardHookRuleLocation" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

const cloudformationGuardHookRuleLocation: cloudformationGuardHook.CloudformationGuardHookRuleLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.uri">uri</a></code> | <code>string</code> | S3 uri of Guard files. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.versionId">versionId</a></code> | <code>string</code> | S3 object version. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

S3 uri of Guard files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#uri CloudformationGuardHook#uri}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

S3 object version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#version_id CloudformationGuardHook#version_id}

---

### CloudformationGuardHookStackFilters <a name="CloudformationGuardHookStackFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

const cloudformationGuardHookStackFilters: cloudformationGuardHook.CloudformationGuardHookStackFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.filteringCriteria">filteringCriteria</a></code> | <code>string</code> | Attribute to specify the filtering behavior. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackNames">stackNames</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a></code> | List of stack names as filters. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackRoles">stackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a></code> | List of stack roles that are performing the stack operations. |

---

##### `filteringCriteria`<sup>Optional</sup> <a name="filteringCriteria" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.filteringCriteria"></a>

```typescript
public readonly filteringCriteria: string;
```

- *Type:* string

Attribute to specify the filtering behavior.

ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#filtering_criteria CloudformationGuardHook#filtering_criteria}

---

##### `stackNames`<sup>Optional</sup> <a name="stackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackNames"></a>

```typescript
public readonly stackNames: CloudformationGuardHookStackFiltersStackNames;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

List of stack names as filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#stack_names CloudformationGuardHook#stack_names}

---

##### `stackRoles`<sup>Optional</sup> <a name="stackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters.property.stackRoles"></a>

```typescript
public readonly stackRoles: CloudformationGuardHookStackFiltersStackRoles;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

List of stack roles that are performing the stack operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#stack_roles CloudformationGuardHook#stack_roles}

---

### CloudformationGuardHookStackFiltersStackNames <a name="CloudformationGuardHookStackFiltersStackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

const cloudformationGuardHookStackFiltersStackNames: cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.exclude">exclude</a></code> | <code>string[]</code> | List of stack names that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.include">include</a></code> | <code>string[]</code> | List of stack names that the hook is going to target. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

List of stack names that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#exclude CloudformationGuardHook#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

List of stack names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#include CloudformationGuardHook#include}

---

### CloudformationGuardHookStackFiltersStackRoles <a name="CloudformationGuardHookStackFiltersStackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

const cloudformationGuardHookStackFiltersStackRoles: cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.exclude">exclude</a></code> | <code>string[]</code> | List of stack roles that the hook is going to be excluded from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.include">include</a></code> | <code>string[]</code> | List of stack roles that the hook is going to target. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

List of stack roles that the hook is going to be excluded from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#exclude CloudformationGuardHook#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

List of stack roles that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#include CloudformationGuardHook#include}

---

### CloudformationGuardHookTargetFilters <a name="CloudformationGuardHookTargetFilters" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

const cloudformationGuardHookTargetFilters: cloudformationGuardHook.CloudformationGuardHookTargetFilters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.actions">actions</a></code> | <code>string[]</code> | List of actions that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.invocationPoints">invocationPoints</a></code> | <code>string[]</code> | List of invocation points that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targetNames">targetNames</a></code> | <code>string[]</code> | List of type names that the hook is going to target. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targets">targets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>[]</code> | List of hook targets. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

List of actions that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#actions CloudformationGuardHook#actions}

---

##### `invocationPoints`<sup>Optional</sup> <a name="invocationPoints" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.invocationPoints"></a>

```typescript
public readonly invocationPoints: string[];
```

- *Type:* string[]

List of invocation points that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#invocation_points CloudformationGuardHook#invocation_points}

---

##### `targetNames`<sup>Optional</sup> <a name="targetNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targetNames"></a>

```typescript
public readonly targetNames: string[];
```

- *Type:* string[]

List of type names that the hook is going to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_names CloudformationGuardHook#target_names}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters.property.targets"></a>

```typescript
public readonly targets: IResolvable | CloudformationGuardHookTargetFiltersTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>[]

List of hook targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#targets CloudformationGuardHook#targets}

---

### CloudformationGuardHookTargetFiltersTargets <a name="CloudformationGuardHookTargetFiltersTargets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

const cloudformationGuardHookTargetFiltersTargets: cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.action">action</a></code> | <code>string</code> | Target actions are the type of operation hooks will be executed at. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.invocationPoint">invocationPoint</a></code> | <code>string</code> | Invocation points are the point in provisioning workflow where hooks will be executed. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.targetName">targetName</a></code> | <code>string</code> | Type name of hook target. Hook targets are the destination where hooks will be invoked against. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Target actions are the type of operation hooks will be executed at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#action CloudformationGuardHook#action}

---

##### `invocationPoint`<sup>Optional</sup> <a name="invocationPoint" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.invocationPoint"></a>

```typescript
public readonly invocationPoint: string;
```

- *Type:* string

Invocation points are the point in provisioning workflow where hooks will be executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#invocation_point CloudformationGuardHook#invocation_point}

---

##### `targetName`<sup>Optional</sup> <a name="targetName" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

Type name of hook target. Hook targets are the destination where hooks will be invoked against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_guard_hook#target_name CloudformationGuardHook#target_name}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationGuardHookOptionsOutputReference <a name="CloudformationGuardHookOptionsOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

new cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resetInputParams">resetInputParams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputParams` <a name="resetInputParams" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.resetInputParams"></a>

```typescript
public resetInputParams(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParamsInput">inputParamsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParams">inputParams</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputParamsInput`<sup>Optional</sup> <a name="inputParamsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParamsInput"></a>

```typescript
public readonly inputParamsInput: string;
```

- *Type:* string

---

##### `inputParams`<sup>Required</sup> <a name="inputParams" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.inputParams"></a>

```typescript
public readonly inputParams: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationGuardHookOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookOptions">CloudformationGuardHookOptions</a>

---


### CloudformationGuardHookRuleLocationOutputReference <a name="CloudformationGuardHookRuleLocationOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

new cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.resetVersionId"></a>

```typescript
public resetVersionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationGuardHookRuleLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookRuleLocation">CloudformationGuardHookRuleLocation</a>

---


### CloudformationGuardHookStackFiltersOutputReference <a name="CloudformationGuardHookStackFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

new cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackNames">putStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackRoles">putStackRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetFilteringCriteria">resetFilteringCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackNames">resetStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackRoles">resetStackRoles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStackNames` <a name="putStackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackNames"></a>

```typescript
public putStackNames(value: CloudformationGuardHookStackFiltersStackNames): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackNames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

---

##### `putStackRoles` <a name="putStackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackRoles"></a>

```typescript
public putStackRoles(value: CloudformationGuardHookStackFiltersStackRoles): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.putStackRoles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

---

##### `resetFilteringCriteria` <a name="resetFilteringCriteria" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetFilteringCriteria"></a>

```typescript
public resetFilteringCriteria(): void
```

##### `resetStackNames` <a name="resetStackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackNames"></a>

```typescript
public resetStackNames(): void
```

##### `resetStackRoles` <a name="resetStackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.resetStackRoles"></a>

```typescript
public resetStackRoles(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNames">stackNames</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference">CloudformationGuardHookStackFiltersStackNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRoles">stackRoles</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference">CloudformationGuardHookStackFiltersStackRolesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteriaInput">filteringCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNamesInput">stackNamesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRolesInput">stackRolesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria">filteringCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stackNames`<sup>Required</sup> <a name="stackNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNames"></a>

```typescript
public readonly stackNames: CloudformationGuardHookStackFiltersStackNamesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference">CloudformationGuardHookStackFiltersStackNamesOutputReference</a>

---

##### `stackRoles`<sup>Required</sup> <a name="stackRoles" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRoles"></a>

```typescript
public readonly stackRoles: CloudformationGuardHookStackFiltersStackRolesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference">CloudformationGuardHookStackFiltersStackRolesOutputReference</a>

---

##### `filteringCriteriaInput`<sup>Optional</sup> <a name="filteringCriteriaInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteriaInput"></a>

```typescript
public readonly filteringCriteriaInput: string;
```

- *Type:* string

---

##### `stackNamesInput`<sup>Optional</sup> <a name="stackNamesInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackNamesInput"></a>

```typescript
public readonly stackNamesInput: IResolvable | CloudformationGuardHookStackFiltersStackNames;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

---

##### `stackRolesInput`<sup>Optional</sup> <a name="stackRolesInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.stackRolesInput"></a>

```typescript
public readonly stackRolesInput: IResolvable | CloudformationGuardHookStackFiltersStackRoles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

---

##### `filteringCriteria`<sup>Required</sup> <a name="filteringCriteria" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.filteringCriteria"></a>

```typescript
public readonly filteringCriteria: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationGuardHookStackFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFilters">CloudformationGuardHookStackFilters</a>

---


### CloudformationGuardHookStackFiltersStackNamesOutputReference <a name="CloudformationGuardHookStackFiltersStackNamesOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

new cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.excludeInput">excludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: string[];
```

- *Type:* string[]

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationGuardHookStackFiltersStackNames;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackNames">CloudformationGuardHookStackFiltersStackNames</a>

---


### CloudformationGuardHookStackFiltersStackRolesOutputReference <a name="CloudformationGuardHookStackFiltersStackRolesOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

new cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetInclude">resetInclude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.excludeInput">excludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.includeInput">includeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: string[];
```

- *Type:* string[]

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: string[];
```

- *Type:* string[]

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationGuardHookStackFiltersStackRoles;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookStackFiltersStackRoles">CloudformationGuardHookStackFiltersStackRoles</a>

---


### CloudformationGuardHookTargetFiltersOutputReference <a name="CloudformationGuardHookTargetFiltersOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

new cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetInvocationPoints">resetInvocationPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargetNames">resetTargetNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargets` <a name="putTargets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.putTargets"></a>

```typescript
public putTargets(value: IResolvable | CloudformationGuardHookTargetFiltersTargets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.putTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>[]

---

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetInvocationPoints` <a name="resetInvocationPoints" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetInvocationPoints"></a>

```typescript
public resetInvocationPoints(): void
```

##### `resetTargetNames` <a name="resetTargetNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargetNames"></a>

```typescript
public resetTargetNames(): void
```

##### `resetTargets` <a name="resetTargets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.resetTargets"></a>

```typescript
public resetTargets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList">CloudformationGuardHookTargetFiltersTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPointsInput">invocationPointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNamesInput">targetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetsInput">targetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints">invocationPoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNames">targetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targets"></a>

```typescript
public readonly targets: CloudformationGuardHookTargetFiltersTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList">CloudformationGuardHookTargetFiltersTargetsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `invocationPointsInput`<sup>Optional</sup> <a name="invocationPointsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPointsInput"></a>

```typescript
public readonly invocationPointsInput: string[];
```

- *Type:* string[]

---

##### `targetNamesInput`<sup>Optional</sup> <a name="targetNamesInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNamesInput"></a>

```typescript
public readonly targetNamesInput: string[];
```

- *Type:* string[]

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetsInput"></a>

```typescript
public readonly targetsInput: IResolvable | CloudformationGuardHookTargetFiltersTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `invocationPoints`<sup>Required</sup> <a name="invocationPoints" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.invocationPoints"></a>

```typescript
public readonly invocationPoints: string[];
```

- *Type:* string[]

---

##### `targetNames`<sup>Required</sup> <a name="targetNames" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.targetNames"></a>

```typescript
public readonly targetNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationGuardHookTargetFilters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFilters">CloudformationGuardHookTargetFilters</a>

---


### CloudformationGuardHookTargetFiltersTargetsList <a name="CloudformationGuardHookTargetFiltersTargetsList" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

new cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.get"></a>

```typescript
public get(index: number): CloudformationGuardHookTargetFiltersTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationGuardHookTargetFiltersTargets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>[]

---


### CloudformationGuardHookTargetFiltersTargetsOutputReference <a name="CloudformationGuardHookTargetFiltersTargetsOutputReference" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer"></a>

```typescript
import { cloudformationGuardHook } from '@cdktn/provider-awscc'

new cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetInvocationPoint">resetInvocationPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetTargetName">resetTargetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetInvocationPoint` <a name="resetInvocationPoint" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetInvocationPoint"></a>

```typescript
public resetInvocationPoint(): void
```

##### `resetTargetName` <a name="resetTargetName" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.resetTargetName"></a>

```typescript
public resetTargetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPointInput">invocationPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetNameInput">targetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint">invocationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName">targetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `invocationPointInput`<sup>Optional</sup> <a name="invocationPointInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPointInput"></a>

```typescript
public readonly invocationPointInput: string;
```

- *Type:* string

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetNameInput"></a>

```typescript
public readonly targetNameInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `invocationPoint`<sup>Required</sup> <a name="invocationPoint" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.invocationPoint"></a>

```typescript
public readonly invocationPoint: string;
```

- *Type:* string

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationGuardHookTargetFiltersTargets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationGuardHook.CloudformationGuardHookTargetFiltersTargets">CloudformationGuardHookTargetFiltersTargets</a>

---




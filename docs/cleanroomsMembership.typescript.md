# `cleanroomsMembership` Submodule <a name="`cleanroomsMembership` Submodule" id="@cdktn/provider-awscc.cleanroomsMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsMembership <a name="CleanroomsMembership" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership awscc_cleanrooms_membership}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembership(scope: Construct, id: string, config: CleanroomsMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig">CleanroomsMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig">CleanroomsMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultJobResultConfiguration">putDefaultJobResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration">putDefaultResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration">putPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetDefaultJobResultConfiguration">resetDefaultJobResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetDefaultResultConfiguration">resetDefaultResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetIsMetricsEnabled">resetIsMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetJobLogStatus">resetJobLogStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetPaymentConfiguration">resetPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultJobResultConfiguration` <a name="putDefaultJobResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultJobResultConfiguration"></a>

```typescript
public putDefaultJobResultConfiguration(value: CleanroomsMembershipDefaultJobResultConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultJobResultConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a>

---

##### `putDefaultResultConfiguration` <a name="putDefaultResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration"></a>

```typescript
public putDefaultResultConfiguration(value: CleanroomsMembershipDefaultResultConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putDefaultResultConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>

---

##### `putPaymentConfiguration` <a name="putPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration"></a>

```typescript
public putPaymentConfiguration(value: CleanroomsMembershipPaymentConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putPaymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putTags"></a>

```typescript
public putTags(value: IResolvable | CleanroomsMembershipTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>[]

---

##### `resetDefaultJobResultConfiguration` <a name="resetDefaultJobResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetDefaultJobResultConfiguration"></a>

```typescript
public resetDefaultJobResultConfiguration(): void
```

##### `resetDefaultResultConfiguration` <a name="resetDefaultResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetDefaultResultConfiguration"></a>

```typescript
public resetDefaultResultConfiguration(): void
```

##### `resetIsMetricsEnabled` <a name="resetIsMetricsEnabled" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetIsMetricsEnabled"></a>

```typescript
public resetIsMetricsEnabled(): void
```

##### `resetJobLogStatus` <a name="resetJobLogStatus" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetJobLogStatus"></a>

```typescript
public resetJobLogStatus(): void
```

##### `resetPaymentConfiguration` <a name="resetPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetPaymentConfiguration"></a>

```typescript
public resetPaymentConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsMembership resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isConstruct"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

cleanroomsMembership.CleanroomsMembership.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformElement"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

cleanroomsMembership.CleanroomsMembership.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformResource"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

cleanroomsMembership.CleanroomsMembership.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

cleanroomsMembership.CleanroomsMembership.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CleanroomsMembership resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanroomsMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanroomsMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationArn">collaborationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorAccountId">collaborationCreatorAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultJobResultConfiguration">defaultJobResultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfiguration">defaultResultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference">CleanroomsMembershipDefaultResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.membershipIdentifier">membershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.paymentConfiguration">paymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference">CleanroomsMembershipPaymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList">CleanroomsMembershipTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationIdentifierInput">collaborationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultJobResultConfigurationInput">defaultJobResultConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfigurationInput">defaultResultConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.isMetricsEnabledInput">isMetricsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.jobLogStatusInput">jobLogStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.paymentConfigurationInput">paymentConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.queryLogStatusInput">queryLogStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationIdentifier">collaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.isMetricsEnabled">isMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.jobLogStatus">jobLogStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.queryLogStatus">queryLogStatus</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `collaborationArn`<sup>Required</sup> <a name="collaborationArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationArn"></a>

```typescript
public readonly collaborationArn: string;
```

- *Type:* string

---

##### `collaborationCreatorAccountId`<sup>Required</sup> <a name="collaborationCreatorAccountId" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationCreatorAccountId"></a>

```typescript
public readonly collaborationCreatorAccountId: string;
```

- *Type:* string

---

##### `defaultJobResultConfiguration`<sup>Required</sup> <a name="defaultJobResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultJobResultConfiguration"></a>

```typescript
public readonly defaultJobResultConfiguration: CleanroomsMembershipDefaultJobResultConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputReference</a>

---

##### `defaultResultConfiguration`<sup>Required</sup> <a name="defaultResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfiguration"></a>

```typescript
public readonly defaultResultConfiguration: CleanroomsMembershipDefaultResultConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference">CleanroomsMembershipDefaultResultConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.membershipIdentifier"></a>

```typescript
public readonly membershipIdentifier: string;
```

- *Type:* string

---

##### `paymentConfiguration`<sup>Required</sup> <a name="paymentConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.paymentConfiguration"></a>

```typescript
public readonly paymentConfiguration: CleanroomsMembershipPaymentConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference">CleanroomsMembershipPaymentConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tags"></a>

```typescript
public readonly tags: CleanroomsMembershipTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList">CleanroomsMembershipTagsList</a>

---

##### `collaborationIdentifierInput`<sup>Optional</sup> <a name="collaborationIdentifierInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationIdentifierInput"></a>

```typescript
public readonly collaborationIdentifierInput: string;
```

- *Type:* string

---

##### `defaultJobResultConfigurationInput`<sup>Optional</sup> <a name="defaultJobResultConfigurationInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultJobResultConfigurationInput"></a>

```typescript
public readonly defaultJobResultConfigurationInput: IResolvable | CleanroomsMembershipDefaultJobResultConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a>

---

##### `defaultResultConfigurationInput`<sup>Optional</sup> <a name="defaultResultConfigurationInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.defaultResultConfigurationInput"></a>

```typescript
public readonly defaultResultConfigurationInput: IResolvable | CleanroomsMembershipDefaultResultConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>

---

##### `isMetricsEnabledInput`<sup>Optional</sup> <a name="isMetricsEnabledInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.isMetricsEnabledInput"></a>

```typescript
public readonly isMetricsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jobLogStatusInput`<sup>Optional</sup> <a name="jobLogStatusInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.jobLogStatusInput"></a>

```typescript
public readonly jobLogStatusInput: string;
```

- *Type:* string

---

##### `paymentConfigurationInput`<sup>Optional</sup> <a name="paymentConfigurationInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.paymentConfigurationInput"></a>

```typescript
public readonly paymentConfigurationInput: IResolvable | CleanroomsMembershipPaymentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>

---

##### `queryLogStatusInput`<sup>Optional</sup> <a name="queryLogStatusInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.queryLogStatusInput"></a>

```typescript
public readonly queryLogStatusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CleanroomsMembershipTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>[]

---

##### `collaborationIdentifier`<sup>Required</sup> <a name="collaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.collaborationIdentifier"></a>

```typescript
public readonly collaborationIdentifier: string;
```

- *Type:* string

---

##### `isMetricsEnabled`<sup>Required</sup> <a name="isMetricsEnabled" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.isMetricsEnabled"></a>

```typescript
public readonly isMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jobLogStatus`<sup>Required</sup> <a name="jobLogStatus" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.jobLogStatus"></a>

```typescript
public readonly jobLogStatus: string;
```

- *Type:* string

---

##### `queryLogStatus`<sup>Required</sup> <a name="queryLogStatus" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.queryLogStatus"></a>

```typescript
public readonly queryLogStatus: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsMembershipConfig <a name="CleanroomsMembershipConfig" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipConfig: cleanroomsMembership.CleanroomsMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.collaborationIdentifier">collaborationIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#collaboration_identifier CleanroomsMembership#collaboration_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.queryLogStatus">queryLogStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultJobResultConfiguration">defaultJobResultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#default_job_result_configuration CleanroomsMembership#default_job_result_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultResultConfiguration">defaultResultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#default_result_configuration CleanroomsMembership#default_result_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.isMetricsEnabled">isMetricsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#is_metrics_enabled CleanroomsMembership#is_metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.jobLogStatus">jobLogStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#job_log_status CleanroomsMembership#job_log_status}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.paymentConfiguration">paymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#payment_configuration CleanroomsMembership#payment_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms membership. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `collaborationIdentifier`<sup>Required</sup> <a name="collaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.collaborationIdentifier"></a>

```typescript
public readonly collaborationIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#collaboration_identifier CleanroomsMembership#collaboration_identifier}.

---

##### `queryLogStatus`<sup>Required</sup> <a name="queryLogStatus" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.queryLogStatus"></a>

```typescript
public readonly queryLogStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}.

---

##### `defaultJobResultConfiguration`<sup>Optional</sup> <a name="defaultJobResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultJobResultConfiguration"></a>

```typescript
public readonly defaultJobResultConfiguration: CleanroomsMembershipDefaultJobResultConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#default_job_result_configuration CleanroomsMembership#default_job_result_configuration}.

---

##### `defaultResultConfiguration`<sup>Optional</sup> <a name="defaultResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.defaultResultConfiguration"></a>

```typescript
public readonly defaultResultConfiguration: CleanroomsMembershipDefaultResultConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#default_result_configuration CleanroomsMembership#default_result_configuration}.

---

##### `isMetricsEnabled`<sup>Optional</sup> <a name="isMetricsEnabled" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.isMetricsEnabled"></a>

```typescript
public readonly isMetricsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#is_metrics_enabled CleanroomsMembership#is_metrics_enabled}.

---

##### `jobLogStatus`<sup>Optional</sup> <a name="jobLogStatus" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.jobLogStatus"></a>

```typescript
public readonly jobLogStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#job_log_status CleanroomsMembership#job_log_status}.

---

##### `paymentConfiguration`<sup>Optional</sup> <a name="paymentConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.paymentConfiguration"></a>

```typescript
public readonly paymentConfiguration: CleanroomsMembershipPaymentConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#payment_configuration CleanroomsMembership#payment_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CleanroomsMembershipTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>[]

An arbitrary set of tags (key-value pairs) for this cleanrooms membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#tags CleanroomsMembership#tags}

---

### CleanroomsMembershipDefaultJobResultConfiguration <a name="CleanroomsMembershipDefaultJobResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipDefaultJobResultConfiguration: cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.property.outputConfiguration">outputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}. |

---

##### `outputConfiguration`<sup>Optional</sup> <a name="outputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.property.outputConfiguration"></a>

```typescript
public readonly outputConfiguration: CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}.

---

### CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration: cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration.property.s3"></a>

```typescript
public readonly s3: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}.

---

### CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3: cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}.

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}.

---

### CleanroomsMembershipDefaultResultConfiguration <a name="CleanroomsMembershipDefaultResultConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipDefaultResultConfiguration: cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.outputConfiguration">outputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}. |

---

##### `outputConfiguration`<sup>Optional</sup> <a name="outputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.outputConfiguration"></a>

```typescript
public readonly outputConfiguration: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}.

---

### CleanroomsMembershipDefaultResultConfigurationOutputConfiguration <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipDefaultResultConfigurationOutputConfiguration: cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration.property.s3"></a>

```typescript
public readonly s3: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}.

---

### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3: cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.resultFormat">resultFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.singleFileOutput">singleFileOutput</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#single_file_output CleanroomsMembership#single_file_output}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}.

---

##### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}.

---

##### `resultFormat`<sup>Optional</sup> <a name="resultFormat" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.resultFormat"></a>

```typescript
public readonly resultFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}.

---

##### `singleFileOutput`<sup>Optional</sup> <a name="singleFileOutput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3.property.singleFileOutput"></a>

```typescript
public readonly singleFileOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#single_file_output CleanroomsMembership#single_file_output}.

---

### CleanroomsMembershipPaymentConfiguration <a name="CleanroomsMembershipPaymentConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipPaymentConfiguration: cleanroomsMembership.CleanroomsMembershipPaymentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.jobCompute">jobCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#job_compute CleanroomsMembership#job_compute}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.machineLearning">machineLearning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#machine_learning CleanroomsMembership#machine_learning}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.queryCompute">queryCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#query_compute CleanroomsMembership#query_compute}. |

---

##### `jobCompute`<sup>Optional</sup> <a name="jobCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.jobCompute"></a>

```typescript
public readonly jobCompute: CleanroomsMembershipPaymentConfigurationJobCompute;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#job_compute CleanroomsMembership#job_compute}.

---

##### `machineLearning`<sup>Optional</sup> <a name="machineLearning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.machineLearning"></a>

```typescript
public readonly machineLearning: CleanroomsMembershipPaymentConfigurationMachineLearning;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#machine_learning CleanroomsMembership#machine_learning}.

---

##### `queryCompute`<sup>Optional</sup> <a name="queryCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration.property.queryCompute"></a>

```typescript
public readonly queryCompute: CleanroomsMembershipPaymentConfigurationQueryCompute;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#query_compute CleanroomsMembership#query_compute}.

---

### CleanroomsMembershipPaymentConfigurationJobCompute <a name="CleanroomsMembershipPaymentConfigurationJobCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipPaymentConfigurationJobCompute: cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipPaymentConfigurationMachineLearning <a name="CleanroomsMembershipPaymentConfigurationMachineLearning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipPaymentConfigurationMachineLearning: cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.modelInference">modelInference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#model_inference CleanroomsMembership#model_inference}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.modelTraining">modelTraining</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#model_training CleanroomsMembership#model_training}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.syntheticDataGeneration">syntheticDataGeneration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#synthetic_data_generation CleanroomsMembership#synthetic_data_generation}. |

---

##### `modelInference`<sup>Optional</sup> <a name="modelInference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.modelInference"></a>

```typescript
public readonly modelInference: CleanroomsMembershipPaymentConfigurationMachineLearningModelInference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#model_inference CleanroomsMembership#model_inference}.

---

##### `modelTraining`<sup>Optional</sup> <a name="modelTraining" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.modelTraining"></a>

```typescript
public readonly modelTraining: CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#model_training CleanroomsMembership#model_training}.

---

##### `syntheticDataGeneration`<sup>Optional</sup> <a name="syntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning.property.syntheticDataGeneration"></a>

```typescript
public readonly syntheticDataGeneration: CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#synthetic_data_generation CleanroomsMembership#synthetic_data_generation}.

---

### CleanroomsMembershipPaymentConfigurationMachineLearningModelInference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningModelInference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipPaymentConfigurationMachineLearningModelInference: cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining <a name="CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipPaymentConfigurationMachineLearningModelTraining: cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration <a name="CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration: cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipPaymentConfigurationQueryCompute <a name="CleanroomsMembershipPaymentConfigurationQueryCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipPaymentConfigurationQueryCompute: cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}. |

---

##### `isResponsible`<sup>Optional</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}.

---

### CleanroomsMembershipTags <a name="CleanroomsMembershipTags" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

const cleanroomsMembershipTags: cleanroomsMembership.CleanroomsMembershipTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#key CleanroomsMembership#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#value CleanroomsMembership#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#key CleanroomsMembership#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_membership#value CleanroomsMembership#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.putS3"></a>

```typescript
public putS3(value: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a>

---

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3Input">s3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3"></a>

```typescript
public readonly s3: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a>

---


### CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix">resetKeyPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix"></a>

```typescript
public resetKeyPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput"></a>

```typescript
public readonly keyPrefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationS3</a>

---


### CleanroomsMembershipDefaultJobResultConfigurationOutputReference <a name="CleanroomsMembershipDefaultJobResultConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.putOutputConfiguration">putOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resetOutputConfiguration">resetOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutputConfiguration` <a name="putOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.putOutputConfiguration"></a>

```typescript
public putOutputConfiguration(value: CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.putOutputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a>

---

##### `resetOutputConfiguration` <a name="resetOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resetOutputConfiguration"></a>

```typescript
public resetOutputConfiguration(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfiguration">outputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfigurationInput">outputConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputConfiguration`<sup>Required</sup> <a name="outputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfiguration"></a>

```typescript
public readonly outputConfiguration: CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference">CleanroomsMembershipDefaultJobResultConfigurationOutputConfigurationOutputReference</a>

---

##### `outputConfigurationInput`<sup>Optional</sup> <a name="outputConfigurationInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.outputConfigurationInput"></a>

```typescript
public readonly outputConfigurationInput: IResolvable | CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultJobResultConfigurationOutputConfiguration</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipDefaultJobResultConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultJobResultConfiguration">CleanroomsMembershipDefaultJobResultConfiguration</a>

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3"></a>

```typescript
public putS3(value: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>

---

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3Input">s3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3"></a>

```typescript
public readonly s3: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>

---


### CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix">resetKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetResultFormat">resetResultFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetSingleFileOutput">resetSingleFileOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKeyPrefix` <a name="resetKeyPrefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetKeyPrefix"></a>

```typescript
public resetKeyPrefix(): void
```

##### `resetResultFormat` <a name="resetResultFormat" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetResultFormat"></a>

```typescript
public resetResultFormat(): void
```

##### `resetSingleFileOutput` <a name="resetSingleFileOutput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.resetSingleFileOutput"></a>

```typescript
public resetSingleFileOutput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormatInput">resultFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutputInput">singleFileOutputInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormat">resultFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutput">singleFileOutput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefixInput"></a>

```typescript
public readonly keyPrefixInput: string;
```

- *Type:* string

---

##### `resultFormatInput`<sup>Optional</sup> <a name="resultFormatInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormatInput"></a>

```typescript
public readonly resultFormatInput: string;
```

- *Type:* string

---

##### `singleFileOutputInput`<sup>Optional</sup> <a name="singleFileOutputInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutputInput"></a>

```typescript
public readonly singleFileOutputInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `resultFormat`<sup>Required</sup> <a name="resultFormat" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.resultFormat"></a>

```typescript
public readonly resultFormat: string;
```

- *Type:* string

---

##### `singleFileOutput`<sup>Required</sup> <a name="singleFileOutput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.singleFileOutput"></a>

```typescript
public readonly singleFileOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3</a>

---


### CleanroomsMembershipDefaultResultConfigurationOutputReference <a name="CleanroomsMembershipDefaultResultConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration">putOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetOutputConfiguration">resetOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutputConfiguration` <a name="putOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration"></a>

```typescript
public putOutputConfiguration(value: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.putOutputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>

---

##### `resetOutputConfiguration` <a name="resetOutputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetOutputConfiguration"></a>

```typescript
public resetOutputConfiguration(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfiguration">outputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfigurationInput">outputConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outputConfiguration`<sup>Required</sup> <a name="outputConfiguration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfiguration"></a>

```typescript
public readonly outputConfiguration: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference">CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference</a>

---

##### `outputConfigurationInput`<sup>Optional</sup> <a name="outputConfigurationInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.outputConfigurationInput"></a>

```typescript
public readonly outputConfigurationInput: IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputConfiguration">CleanroomsMembershipDefaultResultConfigurationOutputConfiguration</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipDefaultResultConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipDefaultResultConfiguration">CleanroomsMembershipDefaultResultConfiguration</a>

---


### CleanroomsMembershipPaymentConfigurationJobComputeOutputReference <a name="CleanroomsMembershipPaymentConfigurationJobComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipPaymentConfigurationJobCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a>

---


### CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearningModelInference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a>

---


### CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a>

---


### CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelInference">putModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelTraining">putModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration">putSyntheticDataGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetModelInference">resetModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetModelTraining">resetModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration">resetSyntheticDataGeneration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelInference` <a name="putModelInference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelInference"></a>

```typescript
public putModelInference(value: CleanroomsMembershipPaymentConfigurationMachineLearningModelInference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelInference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a>

---

##### `putModelTraining` <a name="putModelTraining" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelTraining"></a>

```typescript
public putModelTraining(value: CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putModelTraining.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a>

---

##### `putSyntheticDataGeneration` <a name="putSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration"></a>

```typescript
public putSyntheticDataGeneration(value: CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.putSyntheticDataGeneration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---

##### `resetModelInference` <a name="resetModelInference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetModelInference"></a>

```typescript
public resetModelInference(): void
```

##### `resetModelTraining` <a name="resetModelTraining" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetModelTraining"></a>

```typescript
public resetModelTraining(): void
```

##### `resetSyntheticDataGeneration` <a name="resetSyntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.resetSyntheticDataGeneration"></a>

```typescript
public resetSyntheticDataGeneration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInference">modelInference</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTraining">modelTraining</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration">syntheticDataGeneration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput">modelInferenceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput">modelTrainingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput">syntheticDataGenerationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInference`<sup>Required</sup> <a name="modelInference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInference"></a>

```typescript
public readonly modelInference: CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInferenceOutputReference</a>

---

##### `modelTraining`<sup>Required</sup> <a name="modelTraining" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTraining"></a>

```typescript
public readonly modelTraining: CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningModelTrainingOutputReference</a>

---

##### `syntheticDataGeneration`<sup>Required</sup> <a name="syntheticDataGeneration" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGeneration"></a>

```typescript
public readonly syntheticDataGeneration: CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference</a>

---

##### `modelInferenceInput`<sup>Optional</sup> <a name="modelInferenceInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelInferenceInput"></a>

```typescript
public readonly modelInferenceInput: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearningModelInference;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelInference">CleanroomsMembershipPaymentConfigurationMachineLearningModelInference</a>

---

##### `modelTrainingInput`<sup>Optional</sup> <a name="modelTrainingInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.modelTrainingInput"></a>

```typescript
public readonly modelTrainingInput: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining">CleanroomsMembershipPaymentConfigurationMachineLearningModelTraining</a>

---

##### `syntheticDataGenerationInput`<sup>Optional</sup> <a name="syntheticDataGenerationInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.syntheticDataGenerationInput"></a>

```typescript
public readonly syntheticDataGenerationInput: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a>

---


### CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference <a name="CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGenerationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration">CleanroomsMembershipPaymentConfigurationMachineLearningSyntheticDataGeneration</a>

---


### CleanroomsMembershipPaymentConfigurationOutputReference <a name="CleanroomsMembershipPaymentConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putJobCompute">putJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putMachineLearning">putMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute">putQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetJobCompute">resetJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetMachineLearning">resetMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetQueryCompute">resetQueryCompute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJobCompute` <a name="putJobCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putJobCompute"></a>

```typescript
public putJobCompute(value: CleanroomsMembershipPaymentConfigurationJobCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putJobCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a>

---

##### `putMachineLearning` <a name="putMachineLearning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putMachineLearning"></a>

```typescript
public putMachineLearning(value: CleanroomsMembershipPaymentConfigurationMachineLearning): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putMachineLearning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a>

---

##### `putQueryCompute` <a name="putQueryCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute"></a>

```typescript
public putQueryCompute(value: CleanroomsMembershipPaymentConfigurationQueryCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.putQueryCompute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>

---

##### `resetJobCompute` <a name="resetJobCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetJobCompute"></a>

```typescript
public resetJobCompute(): void
```

##### `resetMachineLearning` <a name="resetMachineLearning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetMachineLearning"></a>

```typescript
public resetMachineLearning(): void
```

##### `resetQueryCompute` <a name="resetQueryCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.resetQueryCompute"></a>

```typescript
public resetQueryCompute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.jobCompute">jobCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference">CleanroomsMembershipPaymentConfigurationJobComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearning">machineLearning</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryCompute">queryCompute</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference">CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.jobComputeInput">jobComputeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearningInput">machineLearningInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryComputeInput">queryComputeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobCompute`<sup>Required</sup> <a name="jobCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.jobCompute"></a>

```typescript
public readonly jobCompute: CleanroomsMembershipPaymentConfigurationJobComputeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobComputeOutputReference">CleanroomsMembershipPaymentConfigurationJobComputeOutputReference</a>

---

##### `machineLearning`<sup>Required</sup> <a name="machineLearning" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearning"></a>

```typescript
public readonly machineLearning: CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference">CleanroomsMembershipPaymentConfigurationMachineLearningOutputReference</a>

---

##### `queryCompute`<sup>Required</sup> <a name="queryCompute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryCompute"></a>

```typescript
public readonly queryCompute: CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference">CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference</a>

---

##### `jobComputeInput`<sup>Optional</sup> <a name="jobComputeInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.jobComputeInput"></a>

```typescript
public readonly jobComputeInput: IResolvable | CleanroomsMembershipPaymentConfigurationJobCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationJobCompute">CleanroomsMembershipPaymentConfigurationJobCompute</a>

---

##### `machineLearningInput`<sup>Optional</sup> <a name="machineLearningInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.machineLearningInput"></a>

```typescript
public readonly machineLearningInput: IResolvable | CleanroomsMembershipPaymentConfigurationMachineLearning;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationMachineLearning">CleanroomsMembershipPaymentConfigurationMachineLearning</a>

---

##### `queryComputeInput`<sup>Optional</sup> <a name="queryComputeInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.queryComputeInput"></a>

```typescript
public readonly queryComputeInput: IResolvable | CleanroomsMembershipPaymentConfigurationQueryCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipPaymentConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfiguration">CleanroomsMembershipPaymentConfiguration</a>

---


### CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference <a name="CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resetIsResponsible">resetIsResponsible</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsResponsible` <a name="resetIsResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.resetIsResponsible"></a>

```typescript
public resetIsResponsible(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput">isResponsibleInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsible">isResponsible</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponsibleInput`<sup>Optional</sup> <a name="isResponsibleInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsibleInput"></a>

```typescript
public readonly isResponsibleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isResponsible`<sup>Required</sup> <a name="isResponsible" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.isResponsible"></a>

```typescript
public readonly isResponsible: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipPaymentConfigurationQueryCompute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipPaymentConfigurationQueryCompute">CleanroomsMembershipPaymentConfigurationQueryCompute</a>

---


### CleanroomsMembershipTagsList <a name="CleanroomsMembershipTagsList" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.get"></a>

```typescript
public get(index: number): CleanroomsMembershipTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>[]

---


### CleanroomsMembershipTagsOutputReference <a name="CleanroomsMembershipTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer"></a>

```typescript
import { cleanroomsMembership } from '@cdktn/provider-awscc'

new cleanroomsMembership.CleanroomsMembershipTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CleanroomsMembershipTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsMembership.CleanroomsMembershipTags">CleanroomsMembershipTags</a>

---




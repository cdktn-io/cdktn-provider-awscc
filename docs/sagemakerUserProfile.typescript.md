# `sagemakerUserProfile` Submodule <a name="`sagemakerUserProfile` Submodule" id="@cdktn/provider-awscc.sagemakerUserProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerUserProfile <a name="SagemakerUserProfile" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile awscc_sagemaker_user_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfile(scope: Construct, id: string, config: SagemakerUserProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig">SagemakerUserProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig">SagemakerUserProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putUserSettings">putUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserIdentifier">resetSingleSignOnUserIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserValue">resetSingleSignOnUserValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetUserSettings">resetUserSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putTags"></a>

```typescript
public putTags(value: IResolvable | SagemakerUserProfileTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>[]

---

##### `putUserSettings` <a name="putUserSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putUserSettings"></a>

```typescript
public putUserSettings(value: SagemakerUserProfileUserSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

---

##### `resetSingleSignOnUserIdentifier` <a name="resetSingleSignOnUserIdentifier" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserIdentifier"></a>

```typescript
public resetSingleSignOnUserIdentifier(): void
```

##### `resetSingleSignOnUserValue` <a name="resetSingleSignOnUserValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserValue"></a>

```typescript
public resetSingleSignOnUserValue(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUserSettings` <a name="resetUserSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetUserSettings"></a>

```typescript
public resetUserSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerUserProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isConstruct"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

sagemakerUserProfile.SagemakerUserProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

sagemakerUserProfile.SagemakerUserProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

sagemakerUserProfile.SagemakerUserProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SagemakerUserProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerUserProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerUserProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerUserProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList">SagemakerUserProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileArn">userProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userSettings">userSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference">SagemakerUserProfileUserSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifierInput">singleSignOnUserIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValueInput">singleSignOnUserValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileNameInput">userProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userSettingsInput">userSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifier">singleSignOnUserIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValue">singleSignOnUserValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileName">userProfileName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tags"></a>

```typescript
public readonly tags: SagemakerUserProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList">SagemakerUserProfileTagsList</a>

---

##### `userProfileArn`<sup>Required</sup> <a name="userProfileArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileArn"></a>

```typescript
public readonly userProfileArn: string;
```

- *Type:* string

---

##### `userSettings`<sup>Required</sup> <a name="userSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userSettings"></a>

```typescript
public readonly userSettings: SagemakerUserProfileUserSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference">SagemakerUserProfileUserSettingsOutputReference</a>

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `singleSignOnUserIdentifierInput`<sup>Optional</sup> <a name="singleSignOnUserIdentifierInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifierInput"></a>

```typescript
public readonly singleSignOnUserIdentifierInput: string;
```

- *Type:* string

---

##### `singleSignOnUserValueInput`<sup>Optional</sup> <a name="singleSignOnUserValueInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValueInput"></a>

```typescript
public readonly singleSignOnUserValueInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SagemakerUserProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>[]

---

##### `userProfileNameInput`<sup>Optional</sup> <a name="userProfileNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileNameInput"></a>

```typescript
public readonly userProfileNameInput: string;
```

- *Type:* string

---

##### `userSettingsInput`<sup>Optional</sup> <a name="userSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userSettingsInput"></a>

```typescript
public readonly userSettingsInput: IResolvable | SagemakerUserProfileUserSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `singleSignOnUserIdentifier`<sup>Required</sup> <a name="singleSignOnUserIdentifier" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifier"></a>

```typescript
public readonly singleSignOnUserIdentifier: string;
```

- *Type:* string

---

##### `singleSignOnUserValue`<sup>Required</sup> <a name="singleSignOnUserValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValue"></a>

```typescript
public readonly singleSignOnUserValue: string;
```

- *Type:* string

---

##### `userProfileName`<sup>Required</sup> <a name="userProfileName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileName"></a>

```typescript
public readonly userProfileName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerUserProfileConfig <a name="SagemakerUserProfileConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileConfig: sagemakerUserProfile.SagemakerUserProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.domainId">domainId</a></code> | <code>string</code> | The ID of the associated Domain. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.userProfileName">userProfileName</a></code> | <code>string</code> | A name for the UserProfile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserIdentifier">singleSignOnUserIdentifier</a></code> | <code>string</code> | A specifier for the type of value specified in SingleSignOnUserValue. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserValue">singleSignOnUserValue</a></code> | <code>string</code> | The username of the associated AWS Single Sign-On User for this UserProfile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>[]</code> | A list of tags to apply to the user profile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.userSettings">userSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | A collection of settings. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The ID of the associated Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}

---

##### `userProfileName`<sup>Required</sup> <a name="userProfileName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.userProfileName"></a>

```typescript
public readonly userProfileName: string;
```

- *Type:* string

A name for the UserProfile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}

---

##### `singleSignOnUserIdentifier`<sup>Optional</sup> <a name="singleSignOnUserIdentifier" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserIdentifier"></a>

```typescript
public readonly singleSignOnUserIdentifier: string;
```

- *Type:* string

A specifier for the type of value specified in SingleSignOnUserValue.

Currently, the only supported value is "UserName". If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}

---

##### `singleSignOnUserValue`<sup>Optional</sup> <a name="singleSignOnUserValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserValue"></a>

```typescript
public readonly singleSignOnUserValue: string;
```

- *Type:* string

The username of the associated AWS Single Sign-On User for this UserProfile.

If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SagemakerUserProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>[]

A list of tags to apply to the user profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#tags SagemakerUserProfile#tags}

---

##### `userSettings`<sup>Optional</sup> <a name="userSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.userSettings"></a>

```typescript
public readonly userSettings: SagemakerUserProfileUserSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

A collection of settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#user_settings SagemakerUserProfile#user_settings}

---

### SagemakerUserProfileTags <a name="SagemakerUserProfileTags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileTags: sagemakerUserProfile.SagemakerUserProfileTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#key SagemakerUserProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#value SagemakerUserProfile#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#key SagemakerUserProfile#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#value SagemakerUserProfile#value}.

---

### SagemakerUserProfileUserSettings <a name="SagemakerUserProfileUserSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettings: sagemakerUserProfile.SagemakerUserProfileUserSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.autoMountHomeEfs">autoMountHomeEfs</a></code> | <code>string</code> | Indicates whether auto-mounting of an EFS volume is supported for the user profile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.codeEditorAppSettings">codeEditorAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a></code> | The CodeEditor app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customFileSystemConfigs">customFileSystemConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_file_system_configs SagemakerUserProfile#custom_file_system_configs}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customPosixUserConfig">customPosixUserConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_posix_user_config SagemakerUserProfile#custom_posix_user_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.defaultLandingUri">defaultLandingUri</a></code> | <code>string</code> | Defines which Amazon SageMaker application users are directed to by default. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.executionRole">executionRole</a></code> | <code>string</code> | The user profile Amazon Resource Name (ARN). |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterLabAppSettings">jupyterLabAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a></code> | The JupyterLab app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | The Jupyter server's app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | The kernel gateway app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.rStudioServerProAppSettings">rStudioServerProAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a></code> | A collection of settings that configure user interaction with the RStudioServerPro app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.sharingSettings">sharingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a></code> | The sharing settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.spaceStorageSettings">spaceStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a></code> | Default storage settings for a space. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortal">studioWebPortal</a></code> | <code>string</code> | Indicates whether the Studio experience is available to users. If not, users cannot access Studio. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortalSettings">studioWebPortalSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a></code> | Studio settings. |

---

##### `autoMountHomeEfs`<sup>Optional</sup> <a name="autoMountHomeEfs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.autoMountHomeEfs"></a>

```typescript
public readonly autoMountHomeEfs: string;
```

- *Type:* string

Indicates whether auto-mounting of an EFS volume is supported for the user profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#auto_mount_home_efs SagemakerUserProfile#auto_mount_home_efs}

---

##### `codeEditorAppSettings`<sup>Optional</sup> <a name="codeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.codeEditorAppSettings"></a>

```typescript
public readonly codeEditorAppSettings: SagemakerUserProfileUserSettingsCodeEditorAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

The CodeEditor app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#code_editor_app_settings SagemakerUserProfile#code_editor_app_settings}

---

##### `customFileSystemConfigs`<sup>Optional</sup> <a name="customFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customFileSystemConfigs"></a>

```typescript
public readonly customFileSystemConfigs: IResolvable | SagemakerUserProfileUserSettingsCustomFileSystemConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_file_system_configs SagemakerUserProfile#custom_file_system_configs}.

---

##### `customPosixUserConfig`<sup>Optional</sup> <a name="customPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customPosixUserConfig"></a>

```typescript
public readonly customPosixUserConfig: SagemakerUserProfileUserSettingsCustomPosixUserConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_posix_user_config SagemakerUserProfile#custom_posix_user_config}.

---

##### `defaultLandingUri`<sup>Optional</sup> <a name="defaultLandingUri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.defaultLandingUri"></a>

```typescript
public readonly defaultLandingUri: string;
```

- *Type:* string

Defines which Amazon SageMaker application users are directed to by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_landing_uri SagemakerUserProfile#default_landing_uri}

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

The user profile Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#execution_role SagemakerUserProfile#execution_role}

---

##### `jupyterLabAppSettings`<sup>Optional</sup> <a name="jupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterLabAppSettings"></a>

```typescript
public readonly jupyterLabAppSettings: SagemakerUserProfileUserSettingsJupyterLabAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

The JupyterLab app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#jupyter_lab_app_settings SagemakerUserProfile#jupyter_lab_app_settings}

---

##### `jupyterServerAppSettings`<sup>Optional</sup> <a name="jupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterServerAppSettings"></a>

```typescript
public readonly jupyterServerAppSettings: SagemakerUserProfileUserSettingsJupyterServerAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

The Jupyter server's app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}

---

##### `kernelGatewayAppSettings`<sup>Optional</sup> <a name="kernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.kernelGatewayAppSettings"></a>

```typescript
public readonly kernelGatewayAppSettings: SagemakerUserProfileUserSettingsKernelGatewayAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

The kernel gateway app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}

---

##### `rStudioServerProAppSettings`<sup>Optional</sup> <a name="rStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.rStudioServerProAppSettings"></a>

```typescript
public readonly rStudioServerProAppSettings: SagemakerUserProfileUserSettingsRStudioServerProAppSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

A collection of settings that configure user interaction with the RStudioServerPro app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#r_studio_server_pro_app_settings SagemakerUserProfile#r_studio_server_pro_app_settings}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#security_groups SagemakerUserProfile#security_groups}

---

##### `sharingSettings`<sup>Optional</sup> <a name="sharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.sharingSettings"></a>

```typescript
public readonly sharingSettings: SagemakerUserProfileUserSettingsSharingSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

The sharing settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sharing_settings SagemakerUserProfile#sharing_settings}

---

##### `spaceStorageSettings`<sup>Optional</sup> <a name="spaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.spaceStorageSettings"></a>

```typescript
public readonly spaceStorageSettings: SagemakerUserProfileUserSettingsSpaceStorageSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

Default storage settings for a space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#space_storage_settings SagemakerUserProfile#space_storage_settings}

---

##### `studioWebPortal`<sup>Optional</sup> <a name="studioWebPortal" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortal"></a>

```typescript
public readonly studioWebPortal: string;
```

- *Type:* string

Indicates whether the Studio experience is available to users. If not, users cannot access Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#studio_web_portal SagemakerUserProfile#studio_web_portal}

---

##### `studioWebPortalSettings`<sup>Optional</sup> <a name="studioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortalSettings"></a>

```typescript
public readonly studioWebPortalSettings: SagemakerUserProfileUserSettingsStudioWebPortalSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a>

Studio settings.

If these settings are applied on a user level, they take priority over the settings applied on a domain level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#studio_web_portal_settings SagemakerUserProfile#studio_web_portal_settings}

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettings <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsCodeEditorAppSettings: sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.builtInLifecycleConfigArn">builtInLifecycleConfigArn</a></code> | <code>string</code> | The lifecycle configuration that runs before the default lifecycle configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.customImages">customImages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>[]</code> | A list of custom images for use for CodeEditor apps. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | A list of LifecycleConfigArns available for use with CodeEditor apps. |

---

##### `appLifecycleManagement`<sup>Optional</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.appLifecycleManagement"></a>

```typescript
public readonly appLifecycleManagement: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}.

---

##### `builtInLifecycleConfigArn`<sup>Optional</sup> <a name="builtInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.builtInLifecycleConfigArn"></a>

```typescript
public readonly builtInLifecycleConfigArn: string;
```

- *Type:* string

The lifecycle configuration that runs before the default lifecycle configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn SagemakerUserProfile#built_in_lifecycle_config_arn}

---

##### `customImages`<sup>Optional</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.customImages"></a>

```typescript
public readonly customImages: IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>[]

A list of custom images for use for CodeEditor apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_images SagemakerUserProfile#custom_images}

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

A list of LifecycleConfigArns available for use with CodeEditor apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement: sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}. |

---

##### `idleSettings`<sup>Optional</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement.property.idleSettings"></a>

```typescript
public readonly idleSettings: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}.

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings: sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | The idle timeout value set in minutes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.lifecycleManagement">lifecycleManagement</a></code> | <code>string</code> | A flag to enable/disable AppLifecycleManagement settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.maxIdleTimeoutInMinutes">maxIdleTimeoutInMinutes</a></code> | <code>number</code> | The maximum idle timeout value set in minutes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.minIdleTimeoutInMinutes">minIdleTimeoutInMinutes</a></code> | <code>number</code> | The minimum idle timeout value set in minutes. |

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

The idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes SagemakerUserProfile#idle_timeout_in_minutes}

---

##### `lifecycleManagement`<sup>Optional</sup> <a name="lifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.lifecycleManagement"></a>

```typescript
public readonly lifecycleManagement: string;
```

- *Type:* string

A flag to enable/disable AppLifecycleManagement settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_management SagemakerUserProfile#lifecycle_management}

---

##### `maxIdleTimeoutInMinutes`<sup>Optional</sup> <a name="maxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.maxIdleTimeoutInMinutes"></a>

```typescript
public readonly maxIdleTimeoutInMinutes: number;
```

- *Type:* number

The maximum idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes SagemakerUserProfile#max_idle_timeout_in_minutes}

---

##### `minIdleTimeoutInMinutes`<sup>Optional</sup> <a name="minIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.minIdleTimeoutInMinutes"></a>

```typescript
public readonly minIdleTimeoutInMinutes: number;
```

- *Type:* number

The minimum idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes SagemakerUserProfile#min_idle_timeout_in_minutes}

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages: sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | The Name of the AppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.imageName">imageName</a></code> | <code>string</code> | The name of the CustomImage. Must be unique to your account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.imageVersionNumber">imageVersionNumber</a></code> | <code>number</code> | The version number of the CustomImage. |

---

##### `appImageConfigName`<sup>Optional</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

The Name of the AppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The name of the CustomImage. Must be unique to your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}

---

##### `imageVersionNumber`<sup>Optional</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.imageVersionNumber"></a>

```typescript
public readonly imageVersionNumber: number;
```

- *Type:* number

The version number of the CustomImage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec: sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>string</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | The ARN of the image version created on the instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.trainingPlanArn">trainingPlanArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}

---

##### `trainingPlanArn`<sup>Optional</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.trainingPlanArn"></a>

```typescript
public readonly trainingPlanArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#training_plan_arn SagemakerUserProfile#training_plan_arn}

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfigs <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsCustomFileSystemConfigs: sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.efsFileSystemConfig">efsFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#efs_file_system_config SagemakerUserProfile#efs_file_system_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.fsxLustreFileSystemConfig">fsxLustreFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#fsx_lustre_file_system_config SagemakerUserProfile#fsx_lustre_file_system_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.s3FileSystemConfig">s3FileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_file_system_config SagemakerUserProfile#s3_file_system_config}. |

---

##### `efsFileSystemConfig`<sup>Optional</sup> <a name="efsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.efsFileSystemConfig"></a>

```typescript
public readonly efsFileSystemConfig: SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#efs_file_system_config SagemakerUserProfile#efs_file_system_config}.

---

##### `fsxLustreFileSystemConfig`<sup>Optional</sup> <a name="fsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.fsxLustreFileSystemConfig"></a>

```typescript
public readonly fsxLustreFileSystemConfig: SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#fsx_lustre_file_system_config SagemakerUserProfile#fsx_lustre_file_system_config}.

---

##### `s3FileSystemConfig`<sup>Optional</sup> <a name="s3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.s3FileSystemConfig"></a>

```typescript
public readonly s3FileSystemConfig: SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_file_system_config SagemakerUserProfile#s3_file_system_config}.

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig: sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.property.fileSystemPath">fileSystemPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}.

---

##### `fileSystemPath`<sup>Optional</sup> <a name="fileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.property.fileSystemPath"></a>

```typescript
public readonly fileSystemPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}.

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig: sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.property.fileSystemPath">fileSystemPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}. |

---

##### `fileSystemId`<sup>Optional</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}.

---

##### `fileSystemPath`<sup>Optional</sup> <a name="fileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.property.fileSystemPath"></a>

```typescript
public readonly fileSystemPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}.

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig: sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.property.mountPath">mountPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#mount_path SagemakerUserProfile#mount_path}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.property.s3Uri">s3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_uri SagemakerUserProfile#s3_uri}. |

---

##### `mountPath`<sup>Optional</sup> <a name="mountPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#mount_path SagemakerUserProfile#mount_path}.

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_uri SagemakerUserProfile#s3_uri}.

---

### SagemakerUserProfileUserSettingsCustomPosixUserConfig <a name="SagemakerUserProfileUserSettingsCustomPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsCustomPosixUserConfig: sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.gid">gid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#gid SagemakerUserProfile#gid}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.uid">uid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#uid SagemakerUserProfile#uid}. |

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.gid"></a>

```typescript
public readonly gid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#gid SagemakerUserProfile#gid}.

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.uid"></a>

```typescript
public readonly uid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#uid SagemakerUserProfile#uid}.

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettings <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsJupyterLabAppSettings: sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.builtInLifecycleConfigArn">builtInLifecycleConfigArn</a></code> | <code>string</code> | The lifecycle configuration that runs before the default lifecycle configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.codeRepositories">codeRepositories</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>[]</code> | A list of CodeRepositories available for use with JupyterLab apps. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.customImages">customImages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>[]</code> | A list of custom images available for use for JupyterLab apps. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.emrSettings">emrSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a></code> | The configuration parameters for EMR settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | A list of LifecycleConfigArns available for use with JupyterLab apps. |

---

##### `appLifecycleManagement`<sup>Optional</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.appLifecycleManagement"></a>

```typescript
public readonly appLifecycleManagement: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}.

---

##### `builtInLifecycleConfigArn`<sup>Optional</sup> <a name="builtInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.builtInLifecycleConfigArn"></a>

```typescript
public readonly builtInLifecycleConfigArn: string;
```

- *Type:* string

The lifecycle configuration that runs before the default lifecycle configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn SagemakerUserProfile#built_in_lifecycle_config_arn}

---

##### `codeRepositories`<sup>Optional</sup> <a name="codeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.codeRepositories"></a>

```typescript
public readonly codeRepositories: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>[]

A list of CodeRepositories available for use with JupyterLab apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#code_repositories SagemakerUserProfile#code_repositories}

---

##### `customImages`<sup>Optional</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.customImages"></a>

```typescript
public readonly customImages: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>[]

A list of custom images available for use for JupyterLab apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_images SagemakerUserProfile#custom_images}

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `emrSettings`<sup>Optional</sup> <a name="emrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.emrSettings"></a>

```typescript
public readonly emrSettings: SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a>

The configuration parameters for EMR settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#emr_settings SagemakerUserProfile#emr_settings}

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

A list of LifecycleConfigArns available for use with JupyterLab apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement: sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}. |

---

##### `idleSettings`<sup>Optional</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement.property.idleSettings"></a>

```typescript
public readonly idleSettings: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}.

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings: sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | The idle timeout value set in minutes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.lifecycleManagement">lifecycleManagement</a></code> | <code>string</code> | A flag to enable/disable AppLifecycleManagement settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.maxIdleTimeoutInMinutes">maxIdleTimeoutInMinutes</a></code> | <code>number</code> | The maximum idle timeout value set in minutes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.minIdleTimeoutInMinutes">minIdleTimeoutInMinutes</a></code> | <code>number</code> | The minimum idle timeout value set in minutes. |

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

The idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes SagemakerUserProfile#idle_timeout_in_minutes}

---

##### `lifecycleManagement`<sup>Optional</sup> <a name="lifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.lifecycleManagement"></a>

```typescript
public readonly lifecycleManagement: string;
```

- *Type:* string

A flag to enable/disable AppLifecycleManagement settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_management SagemakerUserProfile#lifecycle_management}

---

##### `maxIdleTimeoutInMinutes`<sup>Optional</sup> <a name="maxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.maxIdleTimeoutInMinutes"></a>

```typescript
public readonly maxIdleTimeoutInMinutes: number;
```

- *Type:* number

The maximum idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes SagemakerUserProfile#max_idle_timeout_in_minutes}

---

##### `minIdleTimeoutInMinutes`<sup>Optional</sup> <a name="minIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.minIdleTimeoutInMinutes"></a>

```typescript
public readonly minIdleTimeoutInMinutes: number;
```

- *Type:* number

The minimum idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes SagemakerUserProfile#min_idle_timeout_in_minutes}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories: sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | A CodeRepository (valid URL) to be used within Jupyter's Git extension. |

---

##### `repositoryUrl`<sup>Optional</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

A CodeRepository (valid URL) to be used within Jupyter's Git extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages: sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | The Name of the AppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.imageName">imageName</a></code> | <code>string</code> | The name of the CustomImage. Must be unique to your account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.imageVersionNumber">imageVersionNumber</a></code> | <code>number</code> | The version number of the CustomImage. |

---

##### `appImageConfigName`<sup>Optional</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

The Name of the AppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The name of the CustomImage. Must be unique to your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}

---

##### `imageVersionNumber`<sup>Optional</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.imageVersionNumber"></a>

```typescript
public readonly imageVersionNumber: number;
```

- *Type:* number

The version number of the CustomImage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec: sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>string</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | The ARN of the image version created on the instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.trainingPlanArn">trainingPlanArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}

---

##### `trainingPlanArn`<sup>Optional</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.trainingPlanArn"></a>

```typescript
public readonly trainingPlanArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#training_plan_arn SagemakerUserProfile#training_plan_arn}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings: sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.property.assumableRoleArns">assumableRoleArns</a></code> | <code>string[]</code> | An array of Amazon Resource Names (ARNs) of the IAM roles that the execution role of SageMaker can assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.property.executionRoleArns">executionRoleArns</a></code> | <code>string[]</code> | An array of ARNs of IAM roles used by EMR cluster instances or job execution environments. |

---

##### `assumableRoleArns`<sup>Optional</sup> <a name="assumableRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.property.assumableRoleArns"></a>

```typescript
public readonly assumableRoleArns: string[];
```

- *Type:* string[]

An array of Amazon Resource Names (ARNs) of the IAM roles that the execution role of SageMaker can assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#assumable_role_arns SagemakerUserProfile#assumable_role_arns}

---

##### `executionRoleArns`<sup>Optional</sup> <a name="executionRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.property.executionRoleArns"></a>

```typescript
public readonly executionRoleArns: string[];
```

- *Type:* string[]

An array of ARNs of IAM roles used by EMR cluster instances or job execution environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#execution_role_arns SagemakerUserProfile#execution_role_arns}

---

### SagemakerUserProfileUserSettingsJupyterServerAppSettings <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsJupyterServerAppSettings: sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | A list of LifecycleConfigArns available for use with JupyterServer apps. |

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}.

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

A list of LifecycleConfigArns available for use with JupyterServer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}

---

### SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec: sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>string</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | The ARN of the image version created on the instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.trainingPlanArn">trainingPlanArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}

---

##### `trainingPlanArn`<sup>Optional</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.trainingPlanArn"></a>

```typescript
public readonly trainingPlanArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#training_plan_arn SagemakerUserProfile#training_plan_arn}

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettings <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsKernelGatewayAppSettings: sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.customImages">customImages</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>[]</code> | A list of custom SageMaker images that are configured to run as a KernelGateway app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | A list of LifecycleConfigArns available for use with KernelGateway apps. |

---

##### `customImages`<sup>Optional</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.customImages"></a>

```typescript
public readonly customImages: IResolvable | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>[]

A list of custom SageMaker images that are configured to run as a KernelGateway app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_images SagemakerUserProfile#custom_images}

---

##### `defaultResourceSpec`<sup>Optional</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `lifecycleConfigArns`<sup>Optional</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

A list of LifecycleConfigArns available for use with KernelGateway apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages: sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | The Name of the AppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.imageName">imageName</a></code> | <code>string</code> | The name of the CustomImage. Must be unique to your account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.imageVersionNumber">imageVersionNumber</a></code> | <code>number</code> | The version number of the CustomImage. |

---

##### `appImageConfigName`<sup>Optional</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

The Name of the AppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

The name of the CustomImage. Must be unique to your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}

---

##### `imageVersionNumber`<sup>Optional</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.imageVersionNumber"></a>

```typescript
public readonly imageVersionNumber: number;
```

- *Type:* number

The version number of the CustomImage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec: sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType">instanceType</a></code> | <code>string</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | The ARN of the image version created on the instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.trainingPlanArn">trainingPlanArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec. |

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}

---

##### `lifecycleConfigArn`<sup>Optional</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}

---

##### `sageMakerImageArn`<sup>Optional</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}

---

##### `sageMakerImageVersionArn`<sup>Optional</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}

---

##### `trainingPlanArn`<sup>Optional</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.trainingPlanArn"></a>

```typescript
public readonly trainingPlanArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#training_plan_arn SagemakerUserProfile#training_plan_arn}

---

### SagemakerUserProfileUserSettingsRStudioServerProAppSettings <a name="SagemakerUserProfileUserSettingsRStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsRStudioServerProAppSettings: sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.accessStatus">accessStatus</a></code> | <code>string</code> | Indicates whether the current user has access to the RStudioServerPro app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.userGroup">userGroup</a></code> | <code>string</code> | The level of permissions that the user has within the RStudioServerPro app. |

---

##### `accessStatus`<sup>Optional</sup> <a name="accessStatus" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.accessStatus"></a>

```typescript
public readonly accessStatus: string;
```

- *Type:* string

Indicates whether the current user has access to the RStudioServerPro app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#access_status SagemakerUserProfile#access_status}

---

##### `userGroup`<sup>Optional</sup> <a name="userGroup" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.userGroup"></a>

```typescript
public readonly userGroup: string;
```

- *Type:* string

The level of permissions that the user has within the RStudioServerPro app.

This value defaults to User. The Admin value allows the user access to the RStudio Administrative Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#user_group SagemakerUserProfile#user_group}

---

### SagemakerUserProfileUserSettingsSharingSettings <a name="SagemakerUserProfileUserSettingsSharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsSharingSettings: sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.notebookOutputOption">notebookOutputOption</a></code> | <code>string</code> | Whether to include the notebook cell output when sharing the notebook. The default is Disabled. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3KmsKeyId">s3KmsKeyId</a></code> | <code>string</code> | When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3OutputPath">s3OutputPath</a></code> | <code>string</code> | When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots. |

---

##### `notebookOutputOption`<sup>Optional</sup> <a name="notebookOutputOption" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.notebookOutputOption"></a>

```typescript
public readonly notebookOutputOption: string;
```

- *Type:* string

Whether to include the notebook cell output when sharing the notebook. The default is Disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#notebook_output_option SagemakerUserProfile#notebook_output_option}

---

##### `s3KmsKeyId`<sup>Optional</sup> <a name="s3KmsKeyId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3KmsKeyId"></a>

```typescript
public readonly s3KmsKeyId: string;
```

- *Type:* string

When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}

---

##### `s3OutputPath`<sup>Optional</sup> <a name="s3OutputPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3OutputPath"></a>

```typescript
public readonly s3OutputPath: string;
```

- *Type:* string

When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_output_path SagemakerUserProfile#s3_output_path}

---

### SagemakerUserProfileUserSettingsSpaceStorageSettings <a name="SagemakerUserProfileUserSettingsSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsSpaceStorageSettings: sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings.property.defaultEbsStorageSettings">defaultEbsStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a></code> | Properties related to the Amazon Elastic Block Store volume. |

---

##### `defaultEbsStorageSettings`<sup>Optional</sup> <a name="defaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings.property.defaultEbsStorageSettings"></a>

```typescript
public readonly defaultEbsStorageSettings: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

Properties related to the Amazon Elastic Block Store volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_ebs_storage_settings SagemakerUserProfile#default_ebs_storage_settings}

---

### SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings <a name="SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings: sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.defaultEbsVolumeSizeInGb">defaultEbsVolumeSizeInGb</a></code> | <code>number</code> | Default size of the Amazon EBS volume in Gb. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.maximumEbsVolumeSizeInGb">maximumEbsVolumeSizeInGb</a></code> | <code>number</code> | Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb. |

---

##### `defaultEbsVolumeSizeInGb`<sup>Optional</sup> <a name="defaultEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.defaultEbsVolumeSizeInGb"></a>

```typescript
public readonly defaultEbsVolumeSizeInGb: number;
```

- *Type:* number

Default size of the Amazon EBS volume in Gb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_ebs_volume_size_in_gb SagemakerUserProfile#default_ebs_volume_size_in_gb}

---

##### `maximumEbsVolumeSizeInGb`<sup>Optional</sup> <a name="maximumEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.maximumEbsVolumeSizeInGb"></a>

```typescript
public readonly maximumEbsVolumeSizeInGb: number;
```

- *Type:* number

Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#maximum_ebs_volume_size_in_gb SagemakerUserProfile#maximum_ebs_volume_size_in_gb}

---

### SagemakerUserProfileUserSettingsStudioWebPortalSettings <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsStudioWebPortalSettings: sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenAppTypes">hiddenAppTypes</a></code> | <code>string[]</code> | Applications supported in Studio that are hidden from the Studio left navigation pane. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenInstanceTypes">hiddenInstanceTypes</a></code> | <code>string[]</code> | The instance types you are hiding from the Studio user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenMlTools">hiddenMlTools</a></code> | <code>string[]</code> | The machine learning tools that are hidden from the Studio left navigation pane. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenSageMakerImageVersionAliases">hiddenSageMakerImageVersionAliases</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>[]</code> | The version aliases you are hiding from the Studio user interface. |

---

##### `hiddenAppTypes`<sup>Optional</sup> <a name="hiddenAppTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenAppTypes"></a>

```typescript
public readonly hiddenAppTypes: string[];
```

- *Type:* string[]

Applications supported in Studio that are hidden from the Studio left navigation pane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#hidden_app_types SagemakerUserProfile#hidden_app_types}

---

##### `hiddenInstanceTypes`<sup>Optional</sup> <a name="hiddenInstanceTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenInstanceTypes"></a>

```typescript
public readonly hiddenInstanceTypes: string[];
```

- *Type:* string[]

The instance types you are hiding from the Studio user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#hidden_instance_types SagemakerUserProfile#hidden_instance_types}

---

##### `hiddenMlTools`<sup>Optional</sup> <a name="hiddenMlTools" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenMlTools"></a>

```typescript
public readonly hiddenMlTools: string[];
```

- *Type:* string[]

The machine learning tools that are hidden from the Studio left navigation pane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#hidden_ml_tools SagemakerUserProfile#hidden_ml_tools}

---

##### `hiddenSageMakerImageVersionAliases`<sup>Optional</sup> <a name="hiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenSageMakerImageVersionAliases"></a>

```typescript
public readonly hiddenSageMakerImageVersionAliases: IResolvable | SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>[]

The version aliases you are hiding from the Studio user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#hidden_sage_maker_image_version_aliases SagemakerUserProfile#hidden_sage_maker_image_version_aliases}

---

### SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

const sagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases: sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.property.sageMakerImageName">sageMakerImageName</a></code> | <code>string</code> | The SageMaker image name that you are hiding from the Studio user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.property.versionAliases">versionAliases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#version_aliases SagemakerUserProfile#version_aliases}. |

---

##### `sageMakerImageName`<sup>Optional</sup> <a name="sageMakerImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.property.sageMakerImageName"></a>

```typescript
public readonly sageMakerImageName: string;
```

- *Type:* string

The SageMaker image name that you are hiding from the Studio user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_name SagemakerUserProfile#sage_maker_image_name}

---

##### `versionAliases`<sup>Optional</sup> <a name="versionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.property.versionAliases"></a>

```typescript
public readonly versionAliases: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#version_aliases SagemakerUserProfile#version_aliases}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerUserProfileTagsList <a name="SagemakerUserProfileTagsList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.get"></a>

```typescript
public get(index: number): SagemakerUserProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>[]

---


### SagemakerUserProfileTagsOutputReference <a name="SagemakerUserProfileTagsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags">SagemakerUserProfileTags</a>

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetLifecycleManagement">resetLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMaxIdleTimeoutInMinutes">resetMaxIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMinIdleTimeoutInMinutes">resetMinIdleTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes"></a>

```typescript
public resetIdleTimeoutInMinutes(): void
```

##### `resetLifecycleManagement` <a name="resetLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetLifecycleManagement"></a>

```typescript
public resetLifecycleManagement(): void
```

##### `resetMaxIdleTimeoutInMinutes` <a name="resetMaxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMaxIdleTimeoutInMinutes"></a>

```typescript
public resetMaxIdleTimeoutInMinutes(): void
```

##### `resetMinIdleTimeoutInMinutes` <a name="resetMinIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMinIdleTimeoutInMinutes"></a>

```typescript
public resetMinIdleTimeoutInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagementInput">lifecycleManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutesInput">maxIdleTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutesInput">minIdleTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement">lifecycleManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes">maxIdleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes">minIdleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput"></a>

```typescript
public readonly idleTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `lifecycleManagementInput`<sup>Optional</sup> <a name="lifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagementInput"></a>

```typescript
public readonly lifecycleManagementInput: string;
```

- *Type:* string

---

##### `maxIdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="maxIdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutesInput"></a>

```typescript
public readonly maxIdleTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `minIdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="minIdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutesInput"></a>

```typescript
public readonly minIdleTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `lifecycleManagement`<sup>Required</sup> <a name="lifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement"></a>

```typescript
public readonly lifecycleManagement: string;
```

- *Type:* string

---

##### `maxIdleTimeoutInMinutes`<sup>Required</sup> <a name="maxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes"></a>

```typescript
public readonly maxIdleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `minIdleTimeoutInMinutes`<sup>Required</sup> <a name="minIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes"></a>

```typescript
public readonly minIdleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings">putIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings">resetIdleSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdleSettings` <a name="putIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings"></a>

```typescript
public putIdleSettings(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `resetIdleSettings` <a name="resetIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings"></a>

```typescript
public resetIdleSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput">idleSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```typescript
public readonly idleSettings: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `idleSettingsInput`<sup>Optional</sup> <a name="idleSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput"></a>

```typescript
public readonly idleSettingsInput: IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.get"></a>

```typescript
public get(index: number): SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>[]

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetAppImageConfigName">resetAppImageConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetImageVersionNumber">resetImageVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppImageConfigName` <a name="resetAppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetAppImageConfigName"></a>

```typescript
public resetAppImageConfigName(): void
```

##### `resetImageName` <a name="resetImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetImageName"></a>

```typescript
public resetImageName(): void
```

##### `resetImageVersionNumber` <a name="resetImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetImageVersionNumber"></a>

```typescript
public resetImageVersionNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput">imageVersionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput"></a>

```typescript
public readonly appImageConfigNameInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `imageVersionNumberInput`<sup>Optional</sup> <a name="imageVersionNumberInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput"></a>

```typescript
public readonly imageVersionNumberInput: number;
```

- *Type:* number

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```typescript
public readonly imageVersionNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn">resetTrainingPlanArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```typescript
public resetLifecycleConfigArn(): void
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```typescript
public resetSageMakerImageArn(): void
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```typescript
public resetSageMakerImageVersionArn(): void
```

##### `resetTrainingPlanArn` <a name="resetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn"></a>

```typescript
public resetTrainingPlanArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput">trainingPlanArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```typescript
public readonly lifecycleConfigArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```typescript
public readonly sageMakerImageArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```typescript
public readonly sageMakerImageVersionArnInput: string;
```

- *Type:* string

---

##### `trainingPlanArnInput`<sup>Optional</sup> <a name="trainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput"></a>

```typescript
public readonly trainingPlanArnInput: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```typescript
public readonly trainingPlanArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement">putAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putCustomImages">putCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetAppLifecycleManagement">resetAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetBuiltInLifecycleConfigArn">resetBuiltInLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetCustomImages">resetCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppLifecycleManagement` <a name="putAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement"></a>

```typescript
public putAppLifecycleManagement(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---

##### `putCustomImages` <a name="putCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putCustomImages"></a>

```typescript
public putCustomImages(value: IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putCustomImages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>[]

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec"></a>

```typescript
public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---

##### `resetAppLifecycleManagement` <a name="resetAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetAppLifecycleManagement"></a>

```typescript
public resetAppLifecycleManagement(): void
```

##### `resetBuiltInLifecycleConfigArn` <a name="resetBuiltInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetBuiltInLifecycleConfigArn"></a>

```typescript
public resetBuiltInLifecycleConfigArn(): void
```

##### `resetCustomImages` <a name="resetCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetCustomImages"></a>

```typescript
public resetCustomImages(): void
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```typescript
public resetDefaultResourceSpec(): void
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```typescript
public resetLifecycleConfigArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImages">customImages</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagementInput">appLifecycleManagementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArnInput">builtInLifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImagesInput">customImagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArn">builtInLifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement"></a>

```typescript
public readonly appLifecycleManagement: SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `customImages`<sup>Required</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImages"></a>

```typescript
public readonly customImages: SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `appLifecycleManagementInput`<sup>Optional</sup> <a name="appLifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagementInput"></a>

```typescript
public readonly appLifecycleManagementInput: IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---

##### `builtInLifecycleConfigArnInput`<sup>Optional</sup> <a name="builtInLifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArnInput"></a>

```typescript
public readonly builtInLifecycleConfigArnInput: string;
```

- *Type:* string

---

##### `customImagesInput`<sup>Optional</sup> <a name="customImagesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImagesInput"></a>

```typescript
public readonly customImagesInput: IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages</a>[]

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```typescript
public readonly defaultResourceSpecInput: IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```typescript
public readonly lifecycleConfigArnsInput: string[];
```

- *Type:* string[]

---

##### `builtInLifecycleConfigArn`<sup>Required</sup> <a name="builtInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArn"></a>

```typescript
public readonly builtInLifecycleConfigArn: string;
```

- *Type:* string

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resetFileSystemPath">resetFileSystemPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```

##### `resetFileSystemPath` <a name="resetFileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resetFileSystemPath"></a>

```typescript
public resetFileSystemPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPathInput">fileSystemPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPath">fileSystemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `fileSystemPathInput`<sup>Optional</sup> <a name="fileSystemPathInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPathInput"></a>

```typescript
public readonly fileSystemPathInput: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `fileSystemPath`<sup>Required</sup> <a name="fileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPath"></a>

```typescript
public readonly fileSystemPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a>

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resetFileSystemId">resetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resetFileSystemPath">resetFileSystemPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSystemId` <a name="resetFileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resetFileSystemId"></a>

```typescript
public resetFileSystemId(): void
```

##### `resetFileSystemPath` <a name="resetFileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resetFileSystemPath"></a>

```typescript
public resetFileSystemPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPathInput">fileSystemPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPath">fileSystemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `fileSystemPathInput`<sup>Optional</sup> <a name="fileSystemPathInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPathInput"></a>

```typescript
public readonly fileSystemPathInput: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `fileSystemPath`<sup>Required</sup> <a name="fileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPath"></a>

```typescript
public readonly fileSystemPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a>

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsList <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.get"></a>

```typescript
public get(index: number): SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsCustomFileSystemConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>[]

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putEfsFileSystemConfig">putEfsFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putFsxLustreFileSystemConfig">putFsxLustreFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putS3FileSystemConfig">putS3FileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetEfsFileSystemConfig">resetEfsFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetFsxLustreFileSystemConfig">resetFsxLustreFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetS3FileSystemConfig">resetS3FileSystemConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEfsFileSystemConfig` <a name="putEfsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putEfsFileSystemConfig"></a>

```typescript
public putEfsFileSystemConfig(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putEfsFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a>

---

##### `putFsxLustreFileSystemConfig` <a name="putFsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putFsxLustreFileSystemConfig"></a>

```typescript
public putFsxLustreFileSystemConfig(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putFsxLustreFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a>

---

##### `putS3FileSystemConfig` <a name="putS3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putS3FileSystemConfig"></a>

```typescript
public putS3FileSystemConfig(value: SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putS3FileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a>

---

##### `resetEfsFileSystemConfig` <a name="resetEfsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetEfsFileSystemConfig"></a>

```typescript
public resetEfsFileSystemConfig(): void
```

##### `resetFsxLustreFileSystemConfig` <a name="resetFsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetFsxLustreFileSystemConfig"></a>

```typescript
public resetFsxLustreFileSystemConfig(): void
```

##### `resetS3FileSystemConfig` <a name="resetS3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetS3FileSystemConfig"></a>

```typescript
public resetS3FileSystemConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfig">efsFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfig">fsxLustreFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfig">s3FileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfigInput">efsFileSystemConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfigInput">fsxLustreFileSystemConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfigInput">s3FileSystemConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `efsFileSystemConfig`<sup>Required</sup> <a name="efsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfig"></a>

```typescript
public readonly efsFileSystemConfig: SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference</a>

---

##### `fsxLustreFileSystemConfig`<sup>Required</sup> <a name="fsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfig"></a>

```typescript
public readonly fsxLustreFileSystemConfig: SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference</a>

---

##### `s3FileSystemConfig`<sup>Required</sup> <a name="s3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfig"></a>

```typescript
public readonly s3FileSystemConfig: SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference</a>

---

##### `efsFileSystemConfigInput`<sup>Optional</sup> <a name="efsFileSystemConfigInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfigInput"></a>

```typescript
public readonly efsFileSystemConfigInput: IResolvable | SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a>

---

##### `fsxLustreFileSystemConfigInput`<sup>Optional</sup> <a name="fsxLustreFileSystemConfigInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfigInput"></a>

```typescript
public readonly fsxLustreFileSystemConfigInput: IResolvable | SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a>

---

##### `s3FileSystemConfigInput`<sup>Optional</sup> <a name="s3FileSystemConfigInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfigInput"></a>

```typescript
public readonly s3FileSystemConfigInput: IResolvable | SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsCustomFileSystemConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resetMountPath">resetMountPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMountPath` <a name="resetMountPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resetMountPath"></a>

```typescript
public resetMountPath(): void
```

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resetS3Uri"></a>

```typescript
public resetS3Uri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3Uri">s3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3UriInput"></a>

```typescript
public readonly s3UriInput: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3Uri"></a>

```typescript
public readonly s3Uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a>

---


### SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resetUid">resetUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGid` <a name="resetGid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resetGid"></a>

```typescript
public resetGid(): void
```

##### `resetUid` <a name="resetUid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resetUid"></a>

```typescript
public resetUid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gidInput">gidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uidInput">uidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gid">gid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uid">uid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gidInput"></a>

```typescript
public readonly gidInput: number;
```

- *Type:* number

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uidInput"></a>

```typescript
public readonly uidInput: number;
```

- *Type:* number

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gid"></a>

```typescript
public readonly gid: number;
```

- *Type:* number

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uid"></a>

```typescript
public readonly uid: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsCustomPosixUserConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetLifecycleManagement">resetLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMaxIdleTimeoutInMinutes">resetMaxIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMinIdleTimeoutInMinutes">resetMinIdleTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes"></a>

```typescript
public resetIdleTimeoutInMinutes(): void
```

##### `resetLifecycleManagement` <a name="resetLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetLifecycleManagement"></a>

```typescript
public resetLifecycleManagement(): void
```

##### `resetMaxIdleTimeoutInMinutes` <a name="resetMaxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMaxIdleTimeoutInMinutes"></a>

```typescript
public resetMaxIdleTimeoutInMinutes(): void
```

##### `resetMinIdleTimeoutInMinutes` <a name="resetMinIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMinIdleTimeoutInMinutes"></a>

```typescript
public resetMinIdleTimeoutInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagementInput">lifecycleManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutesInput">maxIdleTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutesInput">minIdleTimeoutInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement">lifecycleManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes">maxIdleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes">minIdleTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput"></a>

```typescript
public readonly idleTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `lifecycleManagementInput`<sup>Optional</sup> <a name="lifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagementInput"></a>

```typescript
public readonly lifecycleManagementInput: string;
```

- *Type:* string

---

##### `maxIdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="maxIdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutesInput"></a>

```typescript
public readonly maxIdleTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `minIdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="minIdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutesInput"></a>

```typescript
public readonly minIdleTimeoutInMinutesInput: number;
```

- *Type:* number

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```typescript
public readonly idleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `lifecycleManagement`<sup>Required</sup> <a name="lifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement"></a>

```typescript
public readonly lifecycleManagement: string;
```

- *Type:* string

---

##### `maxIdleTimeoutInMinutes`<sup>Required</sup> <a name="maxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes"></a>

```typescript
public readonly maxIdleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `minIdleTimeoutInMinutes`<sup>Required</sup> <a name="minIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes"></a>

```typescript
public readonly minIdleTimeoutInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings">putIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings">resetIdleSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdleSettings` <a name="putIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings"></a>

```typescript
public putIdleSettings(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `resetIdleSettings` <a name="resetIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings"></a>

```typescript
public resetIdleSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">idleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput">idleSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleSettings`<sup>Required</sup> <a name="idleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```typescript
public readonly idleSettings: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `idleSettingsInput`<sup>Optional</sup> <a name="idleSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput"></a>

```typescript
public readonly idleSettingsInput: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.get"></a>

```typescript
public get(index: number): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>[]

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resetRepositoryUrl">resetRepositoryUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepositoryUrl` <a name="resetRepositoryUrl" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resetRepositoryUrl"></a>

```typescript
public resetRepositoryUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrlInput"></a>

```typescript
public readonly repositoryUrlInput: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.get"></a>

```typescript
public get(index: number): SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>[]

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetAppImageConfigName">resetAppImageConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetImageVersionNumber">resetImageVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppImageConfigName` <a name="resetAppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetAppImageConfigName"></a>

```typescript
public resetAppImageConfigName(): void
```

##### `resetImageName` <a name="resetImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetImageName"></a>

```typescript
public resetImageName(): void
```

##### `resetImageVersionNumber` <a name="resetImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetImageVersionNumber"></a>

```typescript
public resetImageVersionNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput">imageVersionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput"></a>

```typescript
public readonly appImageConfigNameInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `imageVersionNumberInput`<sup>Optional</sup> <a name="imageVersionNumberInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput"></a>

```typescript
public readonly imageVersionNumberInput: number;
```

- *Type:* number

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```typescript
public readonly imageVersionNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn">resetTrainingPlanArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```typescript
public resetLifecycleConfigArn(): void
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```typescript
public resetSageMakerImageArn(): void
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```typescript
public resetSageMakerImageVersionArn(): void
```

##### `resetTrainingPlanArn` <a name="resetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn"></a>

```typescript
public resetTrainingPlanArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput">trainingPlanArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```typescript
public readonly lifecycleConfigArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```typescript
public readonly sageMakerImageArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```typescript
public readonly sageMakerImageVersionArnInput: string;
```

- *Type:* string

---

##### `trainingPlanArnInput`<sup>Optional</sup> <a name="trainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput"></a>

```typescript
public readonly trainingPlanArnInput: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```typescript
public readonly trainingPlanArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resetAssumableRoleArns">resetAssumableRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resetExecutionRoleArns">resetExecutionRoleArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssumableRoleArns` <a name="resetAssumableRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resetAssumableRoleArns"></a>

```typescript
public resetAssumableRoleArns(): void
```

##### `resetExecutionRoleArns` <a name="resetExecutionRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resetExecutionRoleArns"></a>

```typescript
public resetExecutionRoleArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArnsInput">assumableRoleArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArnsInput">executionRoleArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArns">assumableRoleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArns">executionRoleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assumableRoleArnsInput`<sup>Optional</sup> <a name="assumableRoleArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArnsInput"></a>

```typescript
public readonly assumableRoleArnsInput: string[];
```

- *Type:* string[]

---

##### `executionRoleArnsInput`<sup>Optional</sup> <a name="executionRoleArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArnsInput"></a>

```typescript
public readonly executionRoleArnsInput: string[];
```

- *Type:* string[]

---

##### `assumableRoleArns`<sup>Required</sup> <a name="assumableRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArns"></a>

```typescript
public readonly assumableRoleArns: string[];
```

- *Type:* string[]

---

##### `executionRoleArns`<sup>Required</sup> <a name="executionRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArns"></a>

```typescript
public readonly executionRoleArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a>

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement">putAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories">putCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCustomImages">putCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putEmrSettings">putEmrSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetAppLifecycleManagement">resetAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetBuiltInLifecycleConfigArn">resetBuiltInLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCodeRepositories">resetCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCustomImages">resetCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetEmrSettings">resetEmrSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAppLifecycleManagement` <a name="putAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement"></a>

```typescript
public putAppLifecycleManagement(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---

##### `putCodeRepositories` <a name="putCodeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories"></a>

```typescript
public putCodeRepositories(value: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>[]

---

##### `putCustomImages` <a name="putCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCustomImages"></a>

```typescript
public putCustomImages(value: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCustomImages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>[]

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec"></a>

```typescript
public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `putEmrSettings` <a name="putEmrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putEmrSettings"></a>

```typescript
public putEmrSettings(value: SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putEmrSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a>

---

##### `resetAppLifecycleManagement` <a name="resetAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetAppLifecycleManagement"></a>

```typescript
public resetAppLifecycleManagement(): void
```

##### `resetBuiltInLifecycleConfigArn` <a name="resetBuiltInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetBuiltInLifecycleConfigArn"></a>

```typescript
public resetBuiltInLifecycleConfigArn(): void
```

##### `resetCodeRepositories` <a name="resetCodeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCodeRepositories"></a>

```typescript
public resetCodeRepositories(): void
```

##### `resetCustomImages` <a name="resetCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCustomImages"></a>

```typescript
public resetCustomImages(): void
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```typescript
public resetDefaultResourceSpec(): void
```

##### `resetEmrSettings` <a name="resetEmrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetEmrSettings"></a>

```typescript
public resetEmrSettings(): void
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```typescript
public resetLifecycleConfigArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement">appLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories">codeRepositories</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImages">customImages</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettings">emrSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagementInput">appLifecycleManagementInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArnInput">builtInLifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoriesInput">codeRepositoriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImagesInput">customImagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettingsInput">emrSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArn">builtInLifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appLifecycleManagement`<sup>Required</sup> <a name="appLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement"></a>

```typescript
public readonly appLifecycleManagement: SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `codeRepositories`<sup>Required</sup> <a name="codeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories"></a>

```typescript
public readonly codeRepositories: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList</a>

---

##### `customImages`<sup>Required</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImages"></a>

```typescript
public readonly customImages: SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `emrSettings`<sup>Required</sup> <a name="emrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettings"></a>

```typescript
public readonly emrSettings: SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference</a>

---

##### `appLifecycleManagementInput`<sup>Optional</sup> <a name="appLifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagementInput"></a>

```typescript
public readonly appLifecycleManagementInput: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---

##### `builtInLifecycleConfigArnInput`<sup>Optional</sup> <a name="builtInLifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArnInput"></a>

```typescript
public readonly builtInLifecycleConfigArnInput: string;
```

- *Type:* string

---

##### `codeRepositoriesInput`<sup>Optional</sup> <a name="codeRepositoriesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoriesInput"></a>

```typescript
public readonly codeRepositoriesInput: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories</a>[]

---

##### `customImagesInput`<sup>Optional</sup> <a name="customImagesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImagesInput"></a>

```typescript
public readonly customImagesInput: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages</a>[]

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```typescript
public readonly defaultResourceSpecInput: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `emrSettingsInput`<sup>Optional</sup> <a name="emrSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettingsInput"></a>

```typescript
public readonly emrSettingsInput: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```typescript
public readonly lifecycleConfigArnsInput: string[];
```

- *Type:* string[]

---

##### `builtInLifecycleConfigArn`<sup>Required</sup> <a name="builtInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArn"></a>

```typescript
public readonly builtInLifecycleConfigArn: string;
```

- *Type:* string

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn">resetTrainingPlanArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```typescript
public resetLifecycleConfigArn(): void
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```typescript
public resetSageMakerImageArn(): void
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```typescript
public resetSageMakerImageVersionArn(): void
```

##### `resetTrainingPlanArn` <a name="resetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn"></a>

```typescript
public resetTrainingPlanArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput">trainingPlanArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```typescript
public readonly lifecycleConfigArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```typescript
public readonly sageMakerImageArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```typescript
public readonly sageMakerImageVersionArnInput: string;
```

- *Type:* string

---

##### `trainingPlanArnInput`<sup>Optional</sup> <a name="trainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput"></a>

```typescript
public readonly trainingPlanArnInput: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```typescript
public readonly trainingPlanArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec"></a>

```typescript
public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```typescript
public resetDefaultResourceSpec(): void
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```typescript
public resetLifecycleConfigArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```typescript
public readonly defaultResourceSpecInput: IResolvable | SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```typescript
public readonly lifecycleConfigArnsInput: string[];
```

- *Type:* string[]

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsJupyterServerAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.get"></a>

```typescript
public get(index: number): SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>[]

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetAppImageConfigName">resetAppImageConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageVersionNumber">resetImageVersionNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppImageConfigName` <a name="resetAppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetAppImageConfigName"></a>

```typescript
public resetAppImageConfigName(): void
```

##### `resetImageName` <a name="resetImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageName"></a>

```typescript
public resetImageName(): void
```

##### `resetImageVersionNumber` <a name="resetImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageVersionNumber"></a>

```typescript
public resetImageVersionNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput">appImageConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput">imageVersionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName">appImageConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber">imageVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appImageConfigNameInput`<sup>Optional</sup> <a name="appImageConfigNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput"></a>

```typescript
public readonly appImageConfigNameInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `imageVersionNumberInput`<sup>Optional</sup> <a name="imageVersionNumberInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput"></a>

```typescript
public readonly imageVersionNumberInput: number;
```

- *Type:* number

---

##### `appImageConfigName`<sup>Required</sup> <a name="appImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```typescript
public readonly appImageConfigName: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `imageVersionNumber`<sup>Required</sup> <a name="imageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```typescript
public readonly imageVersionNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">resetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">resetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">resetSageMakerImageVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn">resetTrainingPlanArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetLifecycleConfigArn` <a name="resetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```typescript
public resetLifecycleConfigArn(): void
```

##### `resetSageMakerImageArn` <a name="resetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```typescript
public resetSageMakerImageArn(): void
```

##### `resetSageMakerImageVersionArn` <a name="resetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```typescript
public resetSageMakerImageVersionArn(): void
```

##### `resetTrainingPlanArn` <a name="resetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn"></a>

```typescript
public resetTrainingPlanArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">lifecycleConfigArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">sageMakerImageArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">sageMakerImageVersionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput">trainingPlanArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">lifecycleConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">sageMakerImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">sageMakerImageVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">trainingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `lifecycleConfigArnInput`<sup>Optional</sup> <a name="lifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```typescript
public readonly lifecycleConfigArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageArnInput`<sup>Optional</sup> <a name="sageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```typescript
public readonly sageMakerImageArnInput: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArnInput`<sup>Optional</sup> <a name="sageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```typescript
public readonly sageMakerImageVersionArnInput: string;
```

- *Type:* string

---

##### `trainingPlanArnInput`<sup>Optional</sup> <a name="trainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput"></a>

```typescript
public readonly trainingPlanArnInput: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `lifecycleConfigArn`<sup>Required</sup> <a name="lifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```typescript
public readonly lifecycleConfigArn: string;
```

- *Type:* string

---

##### `sageMakerImageArn`<sup>Required</sup> <a name="sageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```typescript
public readonly sageMakerImageArn: string;
```

- *Type:* string

---

##### `sageMakerImageVersionArn`<sup>Required</sup> <a name="sageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```typescript
public readonly sageMakerImageVersionArn: string;
```

- *Type:* string

---

##### `trainingPlanArn`<sup>Required</sup> <a name="trainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```typescript
public readonly trainingPlanArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImages">putCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec">putDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImages">resetCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec">resetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns">resetLifecycleConfigArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomImages` <a name="putCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImages"></a>

```typescript
public putCustomImages(value: IResolvable | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImages.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>[]

---

##### `putDefaultResourceSpec` <a name="putDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec"></a>

```typescript
public putDefaultResourceSpec(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `resetCustomImages` <a name="resetCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImages"></a>

```typescript
public resetCustomImages(): void
```

##### `resetDefaultResourceSpec` <a name="resetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```typescript
public resetDefaultResourceSpec(): void
```

##### `resetLifecycleConfigArns` <a name="resetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```typescript
public resetLifecycleConfigArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImages">customImages</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">defaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImagesInput">customImagesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput">defaultResourceSpecInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput">lifecycleConfigArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">lifecycleConfigArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customImages`<sup>Required</sup> <a name="customImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImages"></a>

```typescript
public readonly customImages: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList</a>

---

##### `defaultResourceSpec`<sup>Required</sup> <a name="defaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```typescript
public readonly defaultResourceSpec: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `customImagesInput`<sup>Optional</sup> <a name="customImagesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImagesInput"></a>

```typescript
public readonly customImagesInput: IResolvable | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages</a>[]

---

##### `defaultResourceSpecInput`<sup>Optional</sup> <a name="defaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```typescript
public readonly defaultResourceSpecInput: IResolvable | SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `lifecycleConfigArnsInput`<sup>Optional</sup> <a name="lifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```typescript
public readonly lifecycleConfigArnsInput: string[];
```

- *Type:* string[]

---

##### `lifecycleConfigArns`<sup>Required</sup> <a name="lifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```typescript
public readonly lifecycleConfigArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsKernelGatewayAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

---


### SagemakerUserProfileUserSettingsOutputReference <a name="SagemakerUserProfileUserSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCodeEditorAppSettings">putCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomFileSystemConfigs">putCustomFileSystemConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomPosixUserConfig">putCustomPosixUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings">putJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings">putJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings">putKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRStudioServerProAppSettings">putRStudioServerProAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings">putSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSpaceStorageSettings">putSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putStudioWebPortalSettings">putStudioWebPortalSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetAutoMountHomeEfs">resetAutoMountHomeEfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCodeEditorAppSettings">resetCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomFileSystemConfigs">resetCustomFileSystemConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomPosixUserConfig">resetCustomPosixUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetDefaultLandingUri">resetDefaultLandingUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetExecutionRole">resetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterLabAppSettings">resetJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterServerAppSettings">resetJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetKernelGatewayAppSettings">resetKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetRStudioServerProAppSettings">resetRStudioServerProAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSharingSettings">resetSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSpaceStorageSettings">resetSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortal">resetStudioWebPortal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortalSettings">resetStudioWebPortalSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeEditorAppSettings` <a name="putCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCodeEditorAppSettings"></a>

```typescript
public putCodeEditorAppSettings(value: SagemakerUserProfileUserSettingsCodeEditorAppSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCodeEditorAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

---

##### `putCustomFileSystemConfigs` <a name="putCustomFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomFileSystemConfigs"></a>

```typescript
public putCustomFileSystemConfigs(value: IResolvable | SagemakerUserProfileUserSettingsCustomFileSystemConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomFileSystemConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>[]

---

##### `putCustomPosixUserConfig` <a name="putCustomPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomPosixUserConfig"></a>

```typescript
public putCustomPosixUserConfig(value: SagemakerUserProfileUserSettingsCustomPosixUserConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomPosixUserConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

---

##### `putJupyterLabAppSettings` <a name="putJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings"></a>

```typescript
public putJupyterLabAppSettings(value: SagemakerUserProfileUserSettingsJupyterLabAppSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

---

##### `putJupyterServerAppSettings` <a name="putJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings"></a>

```typescript
public putJupyterServerAppSettings(value: SagemakerUserProfileUserSettingsJupyterServerAppSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

---

##### `putKernelGatewayAppSettings` <a name="putKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings"></a>

```typescript
public putKernelGatewayAppSettings(value: SagemakerUserProfileUserSettingsKernelGatewayAppSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

---

##### `putRStudioServerProAppSettings` <a name="putRStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRStudioServerProAppSettings"></a>

```typescript
public putRStudioServerProAppSettings(value: SagemakerUserProfileUserSettingsRStudioServerProAppSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRStudioServerProAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

---

##### `putSharingSettings` <a name="putSharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings"></a>

```typescript
public putSharingSettings(value: SagemakerUserProfileUserSettingsSharingSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

---

##### `putSpaceStorageSettings` <a name="putSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSpaceStorageSettings"></a>

```typescript
public putSpaceStorageSettings(value: SagemakerUserProfileUserSettingsSpaceStorageSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSpaceStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

---

##### `putStudioWebPortalSettings` <a name="putStudioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putStudioWebPortalSettings"></a>

```typescript
public putStudioWebPortalSettings(value: SagemakerUserProfileUserSettingsStudioWebPortalSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putStudioWebPortalSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a>

---

##### `resetAutoMountHomeEfs` <a name="resetAutoMountHomeEfs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetAutoMountHomeEfs"></a>

```typescript
public resetAutoMountHomeEfs(): void
```

##### `resetCodeEditorAppSettings` <a name="resetCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCodeEditorAppSettings"></a>

```typescript
public resetCodeEditorAppSettings(): void
```

##### `resetCustomFileSystemConfigs` <a name="resetCustomFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomFileSystemConfigs"></a>

```typescript
public resetCustomFileSystemConfigs(): void
```

##### `resetCustomPosixUserConfig` <a name="resetCustomPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomPosixUserConfig"></a>

```typescript
public resetCustomPosixUserConfig(): void
```

##### `resetDefaultLandingUri` <a name="resetDefaultLandingUri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetDefaultLandingUri"></a>

```typescript
public resetDefaultLandingUri(): void
```

##### `resetExecutionRole` <a name="resetExecutionRole" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetExecutionRole"></a>

```typescript
public resetExecutionRole(): void
```

##### `resetJupyterLabAppSettings` <a name="resetJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterLabAppSettings"></a>

```typescript
public resetJupyterLabAppSettings(): void
```

##### `resetJupyterServerAppSettings` <a name="resetJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterServerAppSettings"></a>

```typescript
public resetJupyterServerAppSettings(): void
```

##### `resetKernelGatewayAppSettings` <a name="resetKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetKernelGatewayAppSettings"></a>

```typescript
public resetKernelGatewayAppSettings(): void
```

##### `resetRStudioServerProAppSettings` <a name="resetRStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetRStudioServerProAppSettings"></a>

```typescript
public resetRStudioServerProAppSettings(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSharingSettings` <a name="resetSharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSharingSettings"></a>

```typescript
public resetSharingSettings(): void
```

##### `resetSpaceStorageSettings` <a name="resetSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSpaceStorageSettings"></a>

```typescript
public resetSpaceStorageSettings(): void
```

##### `resetStudioWebPortal` <a name="resetStudioWebPortal" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortal"></a>

```typescript
public resetStudioWebPortal(): void
```

##### `resetStudioWebPortalSettings` <a name="resetStudioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortalSettings"></a>

```typescript
public resetStudioWebPortalSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettings">codeEditorAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigs">customFileSystemConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList">SagemakerUserProfileUserSettingsCustomFileSystemConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfig">customPosixUserConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference">SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettings">jupyterLabAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettings">jupyterServerAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettings">kernelGatewayAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettings">rStudioServerProAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference">SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettings">sharingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference">SagemakerUserProfileUserSettingsSharingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettings">spaceStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettings">studioWebPortalSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference">SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfsInput">autoMountHomeEfsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettingsInput">codeEditorAppSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigsInput">customFileSystemConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfigInput">customPosixUserConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUriInput">defaultLandingUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettingsInput">jupyterLabAppSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettingsInput">jupyterServerAppSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettingsInput">kernelGatewayAppSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettingsInput">rStudioServerProAppSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettingsInput">sharingSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettingsInput">spaceStorageSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalInput">studioWebPortalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettingsInput">studioWebPortalSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfs">autoMountHomeEfs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUri">defaultLandingUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortal">studioWebPortal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeEditorAppSettings`<sup>Required</sup> <a name="codeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettings"></a>

```typescript
public readonly codeEditorAppSettings: SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference</a>

---

##### `customFileSystemConfigs`<sup>Required</sup> <a name="customFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigs"></a>

```typescript
public readonly customFileSystemConfigs: SagemakerUserProfileUserSettingsCustomFileSystemConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList">SagemakerUserProfileUserSettingsCustomFileSystemConfigsList</a>

---

##### `customPosixUserConfig`<sup>Required</sup> <a name="customPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfig"></a>

```typescript
public readonly customPosixUserConfig: SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference">SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference</a>

---

##### `jupyterLabAppSettings`<sup>Required</sup> <a name="jupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettings"></a>

```typescript
public readonly jupyterLabAppSettings: SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference</a>

---

##### `jupyterServerAppSettings`<sup>Required</sup> <a name="jupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettings"></a>

```typescript
public readonly jupyterServerAppSettings: SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `kernelGatewayAppSettings`<sup>Required</sup> <a name="kernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```typescript
public readonly kernelGatewayAppSettings: SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `rStudioServerProAppSettings`<sup>Required</sup> <a name="rStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettings"></a>

```typescript
public readonly rStudioServerProAppSettings: SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference">SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference</a>

---

##### `sharingSettings`<sup>Required</sup> <a name="sharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettings"></a>

```typescript
public readonly sharingSettings: SagemakerUserProfileUserSettingsSharingSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference">SagemakerUserProfileUserSettingsSharingSettingsOutputReference</a>

---

##### `spaceStorageSettings`<sup>Required</sup> <a name="spaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettings"></a>

```typescript
public readonly spaceStorageSettings: SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference</a>

---

##### `studioWebPortalSettings`<sup>Required</sup> <a name="studioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettings"></a>

```typescript
public readonly studioWebPortalSettings: SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference">SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference</a>

---

##### `autoMountHomeEfsInput`<sup>Optional</sup> <a name="autoMountHomeEfsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfsInput"></a>

```typescript
public readonly autoMountHomeEfsInput: string;
```

- *Type:* string

---

##### `codeEditorAppSettingsInput`<sup>Optional</sup> <a name="codeEditorAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettingsInput"></a>

```typescript
public readonly codeEditorAppSettingsInput: IResolvable | SagemakerUserProfileUserSettingsCodeEditorAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

---

##### `customFileSystemConfigsInput`<sup>Optional</sup> <a name="customFileSystemConfigsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigsInput"></a>

```typescript
public readonly customFileSystemConfigsInput: IResolvable | SagemakerUserProfileUserSettingsCustomFileSystemConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs">SagemakerUserProfileUserSettingsCustomFileSystemConfigs</a>[]

---

##### `customPosixUserConfigInput`<sup>Optional</sup> <a name="customPosixUserConfigInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfigInput"></a>

```typescript
public readonly customPosixUserConfigInput: IResolvable | SagemakerUserProfileUserSettingsCustomPosixUserConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

---

##### `defaultLandingUriInput`<sup>Optional</sup> <a name="defaultLandingUriInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUriInput"></a>

```typescript
public readonly defaultLandingUriInput: string;
```

- *Type:* string

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `jupyterLabAppSettingsInput`<sup>Optional</sup> <a name="jupyterLabAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettingsInput"></a>

```typescript
public readonly jupyterLabAppSettingsInput: IResolvable | SagemakerUserProfileUserSettingsJupyterLabAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

---

##### `jupyterServerAppSettingsInput`<sup>Optional</sup> <a name="jupyterServerAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettingsInput"></a>

```typescript
public readonly jupyterServerAppSettingsInput: IResolvable | SagemakerUserProfileUserSettingsJupyterServerAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

---

##### `kernelGatewayAppSettingsInput`<sup>Optional</sup> <a name="kernelGatewayAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettingsInput"></a>

```typescript
public readonly kernelGatewayAppSettingsInput: IResolvable | SagemakerUserProfileUserSettingsKernelGatewayAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

---

##### `rStudioServerProAppSettingsInput`<sup>Optional</sup> <a name="rStudioServerProAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettingsInput"></a>

```typescript
public readonly rStudioServerProAppSettingsInput: IResolvable | SagemakerUserProfileUserSettingsRStudioServerProAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `sharingSettingsInput`<sup>Optional</sup> <a name="sharingSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettingsInput"></a>

```typescript
public readonly sharingSettingsInput: IResolvable | SagemakerUserProfileUserSettingsSharingSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

---

##### `spaceStorageSettingsInput`<sup>Optional</sup> <a name="spaceStorageSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettingsInput"></a>

```typescript
public readonly spaceStorageSettingsInput: IResolvable | SagemakerUserProfileUserSettingsSpaceStorageSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

---

##### `studioWebPortalInput`<sup>Optional</sup> <a name="studioWebPortalInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalInput"></a>

```typescript
public readonly studioWebPortalInput: string;
```

- *Type:* string

---

##### `studioWebPortalSettingsInput`<sup>Optional</sup> <a name="studioWebPortalSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettingsInput"></a>

```typescript
public readonly studioWebPortalSettingsInput: IResolvable | SagemakerUserProfileUserSettingsStudioWebPortalSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a>

---

##### `autoMountHomeEfs`<sup>Required</sup> <a name="autoMountHomeEfs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfs"></a>

```typescript
public readonly autoMountHomeEfs: string;
```

- *Type:* string

---

##### `defaultLandingUri`<sup>Required</sup> <a name="defaultLandingUri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUri"></a>

```typescript
public readonly defaultLandingUri: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `studioWebPortal`<sup>Required</sup> <a name="studioWebPortal" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortal"></a>

```typescript
public readonly studioWebPortal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

---


### SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetAccessStatus">resetAccessStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetUserGroup">resetUserGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessStatus` <a name="resetAccessStatus" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetAccessStatus"></a>

```typescript
public resetAccessStatus(): void
```

##### `resetUserGroup` <a name="resetUserGroup" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetUserGroup"></a>

```typescript
public resetUserGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatusInput">accessStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroupInput">userGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatus">accessStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroup">userGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessStatusInput`<sup>Optional</sup> <a name="accessStatusInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatusInput"></a>

```typescript
public readonly accessStatusInput: string;
```

- *Type:* string

---

##### `userGroupInput`<sup>Optional</sup> <a name="userGroupInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroupInput"></a>

```typescript
public readonly userGroupInput: string;
```

- *Type:* string

---

##### `accessStatus`<sup>Required</sup> <a name="accessStatus" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatus"></a>

```typescript
public readonly accessStatus: string;
```

- *Type:* string

---

##### `userGroup`<sup>Required</sup> <a name="userGroup" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroup"></a>

```typescript
public readonly userGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsRStudioServerProAppSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

---


### SagemakerUserProfileUserSettingsSharingSettingsOutputReference <a name="SagemakerUserProfileUserSettingsSharingSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption">resetNotebookOutputOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId">resetS3KmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3OutputPath">resetS3OutputPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotebookOutputOption` <a name="resetNotebookOutputOption" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption"></a>

```typescript
public resetNotebookOutputOption(): void
```

##### `resetS3KmsKeyId` <a name="resetS3KmsKeyId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId"></a>

```typescript
public resetS3KmsKeyId(): void
```

##### `resetS3OutputPath` <a name="resetS3OutputPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3OutputPath"></a>

```typescript
public resetS3OutputPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput">notebookOutputOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput">s3KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput">s3OutputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOption">notebookOutputOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId">s3KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notebookOutputOptionInput`<sup>Optional</sup> <a name="notebookOutputOptionInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput"></a>

```typescript
public readonly notebookOutputOptionInput: string;
```

- *Type:* string

---

##### `s3KmsKeyIdInput`<sup>Optional</sup> <a name="s3KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput"></a>

```typescript
public readonly s3KmsKeyIdInput: string;
```

- *Type:* string

---

##### `s3OutputPathInput`<sup>Optional</sup> <a name="s3OutputPathInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput"></a>

```typescript
public readonly s3OutputPathInput: string;
```

- *Type:* string

---

##### `notebookOutputOption`<sup>Required</sup> <a name="notebookOutputOption" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOption"></a>

```typescript
public readonly notebookOutputOption: string;
```

- *Type:* string

---

##### `s3KmsKeyId`<sup>Required</sup> <a name="s3KmsKeyId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId"></a>

```typescript
public readonly s3KmsKeyId: string;
```

- *Type:* string

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPath"></a>

```typescript
public readonly s3OutputPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsSharingSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

---


### SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference <a name="SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resetDefaultEbsVolumeSizeInGb">resetDefaultEbsVolumeSizeInGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resetMaximumEbsVolumeSizeInGb">resetMaximumEbsVolumeSizeInGb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultEbsVolumeSizeInGb` <a name="resetDefaultEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resetDefaultEbsVolumeSizeInGb"></a>

```typescript
public resetDefaultEbsVolumeSizeInGb(): void
```

##### `resetMaximumEbsVolumeSizeInGb` <a name="resetMaximumEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resetMaximumEbsVolumeSizeInGb"></a>

```typescript
public resetMaximumEbsVolumeSizeInGb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGbInput">defaultEbsVolumeSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGbInput">maximumEbsVolumeSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGb">defaultEbsVolumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGb">maximumEbsVolumeSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultEbsVolumeSizeInGbInput`<sup>Optional</sup> <a name="defaultEbsVolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGbInput"></a>

```typescript
public readonly defaultEbsVolumeSizeInGbInput: number;
```

- *Type:* number

---

##### `maximumEbsVolumeSizeInGbInput`<sup>Optional</sup> <a name="maximumEbsVolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGbInput"></a>

```typescript
public readonly maximumEbsVolumeSizeInGbInput: number;
```

- *Type:* number

---

##### `defaultEbsVolumeSizeInGb`<sup>Required</sup> <a name="defaultEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGb"></a>

```typescript
public readonly defaultEbsVolumeSizeInGb: number;
```

- *Type:* number

---

##### `maximumEbsVolumeSizeInGb`<sup>Required</sup> <a name="maximumEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGb"></a>

```typescript
public readonly maximumEbsVolumeSizeInGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

---


### SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference <a name="SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.putDefaultEbsStorageSettings">putDefaultEbsStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resetDefaultEbsStorageSettings">resetDefaultEbsStorageSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultEbsStorageSettings` <a name="putDefaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.putDefaultEbsStorageSettings"></a>

```typescript
public putDefaultEbsStorageSettings(value: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.putDefaultEbsStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

---

##### `resetDefaultEbsStorageSettings` <a name="resetDefaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resetDefaultEbsStorageSettings"></a>

```typescript
public resetDefaultEbsStorageSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettings">defaultEbsStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettingsInput">defaultEbsStorageSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultEbsStorageSettings`<sup>Required</sup> <a name="defaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettings"></a>

```typescript
public readonly defaultEbsStorageSettings: SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference</a>

---

##### `defaultEbsStorageSettingsInput`<sup>Optional</sup> <a name="defaultEbsStorageSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettingsInput"></a>

```typescript
public readonly defaultEbsStorageSettingsInput: IResolvable | SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsSpaceStorageSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

---


### SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.get"></a>

```typescript
public get(index: number): SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>[]

---


### SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resetSageMakerImageName">resetSageMakerImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resetVersionAliases">resetVersionAliases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSageMakerImageName` <a name="resetSageMakerImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resetSageMakerImageName"></a>

```typescript
public resetSageMakerImageName(): void
```

##### `resetVersionAliases` <a name="resetVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resetVersionAliases"></a>

```typescript
public resetVersionAliases(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageNameInput">sageMakerImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliasesInput">versionAliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageName">sageMakerImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliases">versionAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sageMakerImageNameInput`<sup>Optional</sup> <a name="sageMakerImageNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageNameInput"></a>

```typescript
public readonly sageMakerImageNameInput: string;
```

- *Type:* string

---

##### `versionAliasesInput`<sup>Optional</sup> <a name="versionAliasesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliasesInput"></a>

```typescript
public readonly versionAliasesInput: string[];
```

- *Type:* string[]

---

##### `sageMakerImageName`<sup>Required</sup> <a name="sageMakerImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageName"></a>

```typescript
public readonly sageMakerImageName: string;
```

- *Type:* string

---

##### `versionAliases`<sup>Required</sup> <a name="versionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliases"></a>

```typescript
public readonly versionAliases: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>

---


### SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer"></a>

```typescript
import { sagemakerUserProfile } from '@cdktn/provider-awscc'

new sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.putHiddenSageMakerImageVersionAliases">putHiddenSageMakerImageVersionAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenAppTypes">resetHiddenAppTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenInstanceTypes">resetHiddenInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenMlTools">resetHiddenMlTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenSageMakerImageVersionAliases">resetHiddenSageMakerImageVersionAliases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHiddenSageMakerImageVersionAliases` <a name="putHiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.putHiddenSageMakerImageVersionAliases"></a>

```typescript
public putHiddenSageMakerImageVersionAliases(value: IResolvable | SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.putHiddenSageMakerImageVersionAliases.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>[]

---

##### `resetHiddenAppTypes` <a name="resetHiddenAppTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenAppTypes"></a>

```typescript
public resetHiddenAppTypes(): void
```

##### `resetHiddenInstanceTypes` <a name="resetHiddenInstanceTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenInstanceTypes"></a>

```typescript
public resetHiddenInstanceTypes(): void
```

##### `resetHiddenMlTools` <a name="resetHiddenMlTools" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenMlTools"></a>

```typescript
public resetHiddenMlTools(): void
```

##### `resetHiddenSageMakerImageVersionAliases` <a name="resetHiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenSageMakerImageVersionAliases"></a>

```typescript
public resetHiddenSageMakerImageVersionAliases(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliases">hiddenSageMakerImageVersionAliases</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypesInput">hiddenAppTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypesInput">hiddenInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlToolsInput">hiddenMlToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliasesInput">hiddenSageMakerImageVersionAliasesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypes">hiddenAppTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypes">hiddenInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlTools">hiddenMlTools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hiddenSageMakerImageVersionAliases`<sup>Required</sup> <a name="hiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliases"></a>

```typescript
public readonly hiddenSageMakerImageVersionAliases: SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList</a>

---

##### `hiddenAppTypesInput`<sup>Optional</sup> <a name="hiddenAppTypesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypesInput"></a>

```typescript
public readonly hiddenAppTypesInput: string[];
```

- *Type:* string[]

---

##### `hiddenInstanceTypesInput`<sup>Optional</sup> <a name="hiddenInstanceTypesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypesInput"></a>

```typescript
public readonly hiddenInstanceTypesInput: string[];
```

- *Type:* string[]

---

##### `hiddenMlToolsInput`<sup>Optional</sup> <a name="hiddenMlToolsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlToolsInput"></a>

```typescript
public readonly hiddenMlToolsInput: string[];
```

- *Type:* string[]

---

##### `hiddenSageMakerImageVersionAliasesInput`<sup>Optional</sup> <a name="hiddenSageMakerImageVersionAliasesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliasesInput"></a>

```typescript
public readonly hiddenSageMakerImageVersionAliasesInput: IResolvable | SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases</a>[]

---

##### `hiddenAppTypes`<sup>Required</sup> <a name="hiddenAppTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypes"></a>

```typescript
public readonly hiddenAppTypes: string[];
```

- *Type:* string[]

---

##### `hiddenInstanceTypes`<sup>Required</sup> <a name="hiddenInstanceTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypes"></a>

```typescript
public readonly hiddenInstanceTypes: string[];
```

- *Type:* string[]

---

##### `hiddenMlTools`<sup>Required</sup> <a name="hiddenMlTools" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlTools"></a>

```typescript
public readonly hiddenMlTools: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerUserProfileUserSettingsStudioWebPortalSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a>

---




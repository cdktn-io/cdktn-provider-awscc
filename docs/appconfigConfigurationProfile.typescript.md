# `appconfigConfigurationProfile` Submodule <a name="`appconfigConfigurationProfile` Submodule" id="@cdktn/provider-awscc.appconfigConfigurationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigConfigurationProfile <a name="AppconfigConfigurationProfile" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile awscc_appconfig_configuration_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktn/provider-awscc'

new appconfigConfigurationProfile.AppconfigConfigurationProfile(scope: Construct, id: string, config: AppconfigConfigurationProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig">AppconfigConfigurationProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig">AppconfigConfigurationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidators">putValidators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDeletionProtectionCheck">resetDeletionProtectionCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetKmsKeyIdentifier">resetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetRetrievalRoleArn">resetRetrievalRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetValidators">resetValidators</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putTags"></a>

```typescript
public putTags(value: IResolvable | AppconfigConfigurationProfileTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>[]

---

##### `putValidators` <a name="putValidators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidators"></a>

```typescript
public putValidators(value: IResolvable | AppconfigConfigurationProfileValidators[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidators.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>[]

---

##### `resetDeletionProtectionCheck` <a name="resetDeletionProtectionCheck" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDeletionProtectionCheck"></a>

```typescript
public resetDeletionProtectionCheck(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyIdentifier` <a name="resetKmsKeyIdentifier" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetKmsKeyIdentifier"></a>

```typescript
public resetKmsKeyIdentifier(): void
```

##### `resetRetrievalRoleArn` <a name="resetRetrievalRoleArn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetRetrievalRoleArn"></a>

```typescript
public resetRetrievalRoleArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetType"></a>

```typescript
public resetType(): void
```

##### `resetValidators` <a name="resetValidators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetValidators"></a>

```typescript
public resetValidators(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigConfigurationProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktn/provider-awscc'

appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktn/provider-awscc'

appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktn/provider-awscc'

appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktn/provider-awscc'

appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppconfigConfigurationProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppconfigConfigurationProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppconfigConfigurationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigConfigurationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.configurationProfileId">configurationProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList">AppconfigConfigurationProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validators">validators</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList">AppconfigConfigurationProfileValidatorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.deletionProtectionCheckInput">deletionProtectionCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyIdentifierInput">kmsKeyIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUriInput">locationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArnInput">retrievalRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validatorsInput">validatorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.deletionProtectionCheck">deletionProtectionCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArn">retrievalRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.configurationProfileId"></a>

```typescript
public readonly configurationProfileId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tags"></a>

```typescript
public readonly tags: AppconfigConfigurationProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList">AppconfigConfigurationProfileTagsList</a>

---

##### `validators`<sup>Required</sup> <a name="validators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validators"></a>

```typescript
public readonly validators: AppconfigConfigurationProfileValidatorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList">AppconfigConfigurationProfileValidatorsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `deletionProtectionCheckInput`<sup>Optional</sup> <a name="deletionProtectionCheckInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.deletionProtectionCheckInput"></a>

```typescript
public readonly deletionProtectionCheckInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `kmsKeyIdentifierInput`<sup>Optional</sup> <a name="kmsKeyIdentifierInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyIdentifierInput"></a>

```typescript
public readonly kmsKeyIdentifierInput: string;
```

- *Type:* string

---

##### `locationUriInput`<sup>Optional</sup> <a name="locationUriInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUriInput"></a>

```typescript
public readonly locationUriInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retrievalRoleArnInput`<sup>Optional</sup> <a name="retrievalRoleArnInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArnInput"></a>

```typescript
public readonly retrievalRoleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppconfigConfigurationProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `validatorsInput`<sup>Optional</sup> <a name="validatorsInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validatorsInput"></a>

```typescript
public readonly validatorsInput: IResolvable | AppconfigConfigurationProfileValidators[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `deletionProtectionCheck`<sup>Required</sup> <a name="deletionProtectionCheck" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.deletionProtectionCheck"></a>

```typescript
public readonly deletionProtectionCheck: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.kmsKeyIdentifier"></a>

```typescript
public readonly kmsKeyIdentifier: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retrievalRoleArn`<sup>Required</sup> <a name="retrievalRoleArn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArn"></a>

```typescript
public readonly retrievalRoleArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigConfigurationProfileConfig <a name="AppconfigConfigurationProfileConfig" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.Initializer"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktn/provider-awscc'

const appconfigConfigurationProfileConfig: appconfigConfigurationProfile.AppconfigConfigurationProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.applicationId">applicationId</a></code> | <code>string</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.locationUri">locationUri</a></code> | <code>string</code> | A URI to locate the configuration. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.name">name</a></code> | <code>string</code> | A name for the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.deletionProtectionCheck">deletionProtectionCheck</a></code> | <code>string</code> | On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.description">description</a></code> | <code>string</code> | A description of the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>string</code> | The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.retrievalRoleArn">retrievalRoleArn</a></code> | <code>string</code> | The ARN of an IAM role with permission to access the configuration at the specified LocationUri. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>[]</code> | Metadata to assign to the configuration profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.type">type</a></code> | <code>string</code> | The type of configurations contained in the profile. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.validators">validators</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>[]</code> | A list of methods for validating the configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#application_id AppconfigConfigurationProfile#application_id}

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

A URI to locate the configuration.

You can specify the AWS AppConfig hosted configuration store, Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#location_uri AppconfigConfigurationProfile#location_uri}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the configuration profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#name AppconfigConfigurationProfile#name}

---

##### `deletionProtectionCheck`<sup>Optional</sup> <a name="deletionProtectionCheck" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.deletionProtectionCheck"></a>

```typescript
public readonly deletionProtectionCheck: string;
```

- *Type:* string

On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting.

See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#deletion_protection_check AppconfigConfigurationProfile#deletion_protection_check}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the configuration profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#description AppconfigConfigurationProfile#description}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.kmsKeyIdentifier"></a>

```typescript
public readonly kmsKeyIdentifier: string;
```

- *Type:* string

The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#kms_key_identifier AppconfigConfigurationProfile#kms_key_identifier}

---

##### `retrievalRoleArn`<sup>Optional</sup> <a name="retrievalRoleArn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.retrievalRoleArn"></a>

```typescript
public readonly retrievalRoleArn: string;
```

- *Type:* string

The ARN of an IAM role with permission to access the configuration at the specified LocationUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AppconfigConfigurationProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>[]

Metadata to assign to the configuration profile.

Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#tags AppconfigConfigurationProfile#tags}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of configurations contained in the profile.

When calling this API, enter one of the following values for Type: AWS.AppConfig.FeatureFlags, AWS.Freeform

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}

---

##### `validators`<sup>Optional</sup> <a name="validators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.validators"></a>

```typescript
public readonly validators: IResolvable | AppconfigConfigurationProfileValidators[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>[]

A list of methods for validating the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#validators AppconfigConfigurationProfile#validators}

---

### AppconfigConfigurationProfileTags <a name="AppconfigConfigurationProfileTags" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.Initializer"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktn/provider-awscc'

const appconfigConfigurationProfileTags: appconfigConfigurationProfile.AppconfigConfigurationProfileTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.property.key">key</a></code> | <code>string</code> | The key-value string map. The tag key can be up to 128 characters and must not start with aws:. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.property.value">value</a></code> | <code>string</code> | The tag value can be up to 256 characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key-value string map. The tag key can be up to 128 characters and must not start with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#key AppconfigConfigurationProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value can be up to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#value AppconfigConfigurationProfile#value}

---

### AppconfigConfigurationProfileValidators <a name="AppconfigConfigurationProfileValidators" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.Initializer"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktn/provider-awscc'

const appconfigConfigurationProfileValidators: appconfigConfigurationProfile.AppconfigConfigurationProfileValidators = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.property.content">content</a></code> | <code>string</code> | Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.property.type">type</a></code> | <code>string</code> | AWS AppConfig supports validators of type JSON_SCHEMA and LAMBDA. |

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#content AppconfigConfigurationProfile#content}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

AWS AppConfig supports validators of type JSON_SCHEMA and LAMBDA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigConfigurationProfileTagsList <a name="AppconfigConfigurationProfileTagsList" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktn/provider-awscc'

new appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.get"></a>

```typescript
public get(index: number): AppconfigConfigurationProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigConfigurationProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>[]

---


### AppconfigConfigurationProfileTagsOutputReference <a name="AppconfigConfigurationProfileTagsOutputReference" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktn/provider-awscc'

new appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigConfigurationProfileTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileTags">AppconfigConfigurationProfileTags</a>

---


### AppconfigConfigurationProfileValidatorsList <a name="AppconfigConfigurationProfileValidatorsList" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktn/provider-awscc'

new appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.get"></a>

```typescript
public get(index: number): AppconfigConfigurationProfileValidatorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigConfigurationProfileValidators[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>[]

---


### AppconfigConfigurationProfileValidatorsOutputReference <a name="AppconfigConfigurationProfileValidatorsOutputReference" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktn/provider-awscc'

new appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigConfigurationProfileValidators;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appconfigConfigurationProfile.AppconfigConfigurationProfileValidators">AppconfigConfigurationProfileValidators</a>

---




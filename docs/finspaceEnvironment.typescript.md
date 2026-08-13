# `finspaceEnvironment` Submodule <a name="`finspaceEnvironment` Submodule" id="@cdktn/provider-awscc.finspaceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceEnvironment <a name="FinspaceEnvironment" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment awscc_finspace_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

new finspaceEnvironment.FinspaceEnvironment(scope: Construct, id: string, config: FinspaceEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig">FinspaceEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig">FinspaceEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters">putFederationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters">putSuperuserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDataBundles">resetDataBundles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationMode">resetFederationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationParameters">resetFederationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetSuperuserParameters">resetSuperuserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFederationParameters` <a name="putFederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters"></a>

```typescript
public putFederationParameters(value: FinspaceEnvironmentFederationParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

---

##### `putSuperuserParameters` <a name="putSuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters"></a>

```typescript
public putSuperuserParameters(value: FinspaceEnvironmentSuperuserParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags"></a>

```typescript
public putTags(value: IResolvable | FinspaceEnvironmentTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]

---

##### `resetDataBundles` <a name="resetDataBundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDataBundles"></a>

```typescript
public resetDataBundles(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFederationMode` <a name="resetFederationMode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationMode"></a>

```typescript
public resetFederationMode(): void
```

##### `resetFederationParameters` <a name="resetFederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationParameters"></a>

```typescript
public resetFederationParameters(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetSuperuserParameters` <a name="resetSuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetSuperuserParameters"></a>

```typescript
public resetSuperuserParameters(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FinspaceEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

finspaceEnvironment.FinspaceEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

finspaceEnvironment.FinspaceEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

finspaceEnvironment.FinspaceEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

finspaceEnvironment.FinspaceEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FinspaceEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FinspaceEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FinspaceEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FinspaceEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dedicatedServiceAccountId">dedicatedServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentArn">environmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentUrl">environmentUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParameters">federationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference">FinspaceEnvironmentFederationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.sageMakerStudioDomainUrl">sageMakerStudioDomainUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParameters">superuserParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference">FinspaceEnvironmentSuperuserParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList">FinspaceEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundlesInput">dataBundlesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationModeInput">federationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParametersInput">federationParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParametersInput">superuserParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundles">dataBundles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationMode">federationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `dedicatedServiceAccountId`<sup>Required</sup> <a name="dedicatedServiceAccountId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dedicatedServiceAccountId"></a>

```typescript
public readonly dedicatedServiceAccountId: string;
```

- *Type:* string

---

##### `environmentArn`<sup>Required</sup> <a name="environmentArn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentArn"></a>

```typescript
public readonly environmentArn: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `environmentUrl`<sup>Required</sup> <a name="environmentUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentUrl"></a>

```typescript
public readonly environmentUrl: string;
```

- *Type:* string

---

##### `federationParameters`<sup>Required</sup> <a name="federationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParameters"></a>

```typescript
public readonly federationParameters: FinspaceEnvironmentFederationParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference">FinspaceEnvironmentFederationParametersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sageMakerStudioDomainUrl`<sup>Required</sup> <a name="sageMakerStudioDomainUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.sageMakerStudioDomainUrl"></a>

```typescript
public readonly sageMakerStudioDomainUrl: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `superuserParameters`<sup>Required</sup> <a name="superuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParameters"></a>

```typescript
public readonly superuserParameters: FinspaceEnvironmentSuperuserParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference">FinspaceEnvironmentSuperuserParametersOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tags"></a>

```typescript
public readonly tags: FinspaceEnvironmentTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList">FinspaceEnvironmentTagsList</a>

---

##### `dataBundlesInput`<sup>Optional</sup> <a name="dataBundlesInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundlesInput"></a>

```typescript
public readonly dataBundlesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `federationModeInput`<sup>Optional</sup> <a name="federationModeInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationModeInput"></a>

```typescript
public readonly federationModeInput: string;
```

- *Type:* string

---

##### `federationParametersInput`<sup>Optional</sup> <a name="federationParametersInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParametersInput"></a>

```typescript
public readonly federationParametersInput: IResolvable | FinspaceEnvironmentFederationParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `superuserParametersInput`<sup>Optional</sup> <a name="superuserParametersInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParametersInput"></a>

```typescript
public readonly superuserParametersInput: IResolvable | FinspaceEnvironmentSuperuserParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | FinspaceEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]

---

##### `dataBundles`<sup>Required</sup> <a name="dataBundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundles"></a>

```typescript
public readonly dataBundles: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `federationMode`<sup>Required</sup> <a name="federationMode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationMode"></a>

```typescript
public readonly federationMode: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceEnvironmentConfig <a name="FinspaceEnvironmentConfig" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.Initializer"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

const finspaceEnvironmentConfig: finspaceEnvironment.FinspaceEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.name">name</a></code> | <code>string</code> | Name of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dataBundles">dataBundles</a></code> | <code>string[]</code> | ARNs of FinSpace Data Bundles to install. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.description">description</a></code> | <code>string</code> | Description of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationMode">federationMode</a></code> | <code>string</code> | Federation mode used with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationParameters">federationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | Additional parameters to identify Federation mode. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | KMS key used to encrypt customer data within FinSpace Environment infrastructure. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.superuserParameters">superuserParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | Parameters of the first Superuser for the FinSpace Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#name FinspaceEnvironment#name}

---

##### `dataBundles`<sup>Optional</sup> <a name="dataBundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dataBundles"></a>

```typescript
public readonly dataBundles: string[];
```

- *Type:* string[]

ARNs of FinSpace Data Bundles to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#data_bundles FinspaceEnvironment#data_bundles}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#description FinspaceEnvironment#description}

---

##### `federationMode`<sup>Optional</sup> <a name="federationMode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationMode"></a>

```typescript
public readonly federationMode: string;
```

- *Type:* string

Federation mode used with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#federation_mode FinspaceEnvironment#federation_mode}

---

##### `federationParameters`<sup>Optional</sup> <a name="federationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationParameters"></a>

```typescript
public readonly federationParameters: FinspaceEnvironmentFederationParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

Additional parameters to identify Federation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#federation_parameters FinspaceEnvironment#federation_parameters}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

KMS key used to encrypt customer data within FinSpace Environment infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#kms_key_id FinspaceEnvironment#kms_key_id}

---

##### `superuserParameters`<sup>Optional</sup> <a name="superuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.superuserParameters"></a>

```typescript
public readonly superuserParameters: FinspaceEnvironmentSuperuserParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

Parameters of the first Superuser for the FinSpace Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#superuser_parameters FinspaceEnvironment#superuser_parameters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | FinspaceEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#tags FinspaceEnvironment#tags}

---

### FinspaceEnvironmentFederationParameters <a name="FinspaceEnvironmentFederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.Initializer"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

const finspaceEnvironmentFederationParameters: finspaceEnvironment.FinspaceEnvironmentFederationParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.applicationCallBackUrl">applicationCallBackUrl</a></code> | <code>string</code> | SAML metadata URL to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.attributeMap">attributeMap</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]</code> | Attribute map for SAML configuration. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationProviderName">federationProviderName</a></code> | <code>string</code> | Federation provider name to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationUrn">federationUrn</a></code> | <code>string</code> | SAML metadata URL to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataDocument">samlMetadataDocument</a></code> | <code>string</code> | SAML metadata document to link the federation provider to the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataUrl">samlMetadataUrl</a></code> | <code>string</code> | SAML metadata URL to link with the Environment. |

---

##### `applicationCallBackUrl`<sup>Optional</sup> <a name="applicationCallBackUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.applicationCallBackUrl"></a>

```typescript
public readonly applicationCallBackUrl: string;
```

- *Type:* string

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#application_call_back_url FinspaceEnvironment#application_call_back_url}

---

##### `attributeMap`<sup>Optional</sup> <a name="attributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.attributeMap"></a>

```typescript
public readonly attributeMap: IResolvable | FinspaceEnvironmentFederationParametersAttributeMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]

Attribute map for SAML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#attribute_map FinspaceEnvironment#attribute_map}

---

##### `federationProviderName`<sup>Optional</sup> <a name="federationProviderName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationProviderName"></a>

```typescript
public readonly federationProviderName: string;
```

- *Type:* string

Federation provider name to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#federation_provider_name FinspaceEnvironment#federation_provider_name}

---

##### `federationUrn`<sup>Optional</sup> <a name="federationUrn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationUrn"></a>

```typescript
public readonly federationUrn: string;
```

- *Type:* string

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#federation_urn FinspaceEnvironment#federation_urn}

---

##### `samlMetadataDocument`<sup>Optional</sup> <a name="samlMetadataDocument" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataDocument"></a>

```typescript
public readonly samlMetadataDocument: string;
```

- *Type:* string

SAML metadata document to link the federation provider to the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#saml_metadata_document FinspaceEnvironment#saml_metadata_document}

---

##### `samlMetadataUrl`<sup>Optional</sup> <a name="samlMetadataUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataUrl"></a>

```typescript
public readonly samlMetadataUrl: string;
```

- *Type:* string

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#saml_metadata_url FinspaceEnvironment#saml_metadata_url}

---

### FinspaceEnvironmentFederationParametersAttributeMap <a name="FinspaceEnvironmentFederationParametersAttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.Initializer"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

const finspaceEnvironmentFederationParametersAttributeMap: finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#key FinspaceEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#value FinspaceEnvironment#value}

---

### FinspaceEnvironmentSuperuserParameters <a name="FinspaceEnvironmentSuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.Initializer"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

const finspaceEnvironmentSuperuserParameters: finspaceEnvironment.FinspaceEnvironmentSuperuserParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.emailAddress">emailAddress</a></code> | <code>string</code> | Email address. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.firstName">firstName</a></code> | <code>string</code> | First name. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.lastName">lastName</a></code> | <code>string</code> | Last name. |

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#email_address FinspaceEnvironment#email_address}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

First name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#first_name FinspaceEnvironment#first_name}

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#last_name FinspaceEnvironment#last_name}

---

### FinspaceEnvironmentTags <a name="FinspaceEnvironmentTags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.Initializer"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

const finspaceEnvironmentTags: finspaceEnvironment.FinspaceEnvironmentTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#key FinspaceEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/finspace_environment#value FinspaceEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceEnvironmentFederationParametersAttributeMapList <a name="FinspaceEnvironmentFederationParametersAttributeMapList" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

new finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get"></a>

```typescript
public get(index: number): FinspaceEnvironmentFederationParametersAttributeMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceEnvironmentFederationParametersAttributeMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]

---


### FinspaceEnvironmentFederationParametersAttributeMapOutputReference <a name="FinspaceEnvironmentFederationParametersAttributeMapOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

new finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceEnvironmentFederationParametersAttributeMap;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>

---


### FinspaceEnvironmentFederationParametersOutputReference <a name="FinspaceEnvironmentFederationParametersOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

new finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap">putAttributeMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetApplicationCallBackUrl">resetApplicationCallBackUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetAttributeMap">resetAttributeMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationProviderName">resetFederationProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationUrn">resetFederationUrn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataDocument">resetSamlMetadataDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataUrl">resetSamlMetadataUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributeMap` <a name="putAttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap"></a>

```typescript
public putAttributeMap(value: IResolvable | FinspaceEnvironmentFederationParametersAttributeMap[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]

---

##### `resetApplicationCallBackUrl` <a name="resetApplicationCallBackUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetApplicationCallBackUrl"></a>

```typescript
public resetApplicationCallBackUrl(): void
```

##### `resetAttributeMap` <a name="resetAttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetAttributeMap"></a>

```typescript
public resetAttributeMap(): void
```

##### `resetFederationProviderName` <a name="resetFederationProviderName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationProviderName"></a>

```typescript
public resetFederationProviderName(): void
```

##### `resetFederationUrn` <a name="resetFederationUrn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationUrn"></a>

```typescript
public resetFederationUrn(): void
```

##### `resetSamlMetadataDocument` <a name="resetSamlMetadataDocument" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataDocument"></a>

```typescript
public resetSamlMetadataDocument(): void
```

##### `resetSamlMetadataUrl` <a name="resetSamlMetadataUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataUrl"></a>

```typescript
public resetSamlMetadataUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMap">attributeMap</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList">FinspaceEnvironmentFederationParametersAttributeMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrlInput">applicationCallBackUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMapInput">attributeMapInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderNameInput">federationProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrnInput">federationUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocumentInput">samlMetadataDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrlInput">samlMetadataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl">applicationCallBackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName">federationProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrn">federationUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument">samlMetadataDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl">samlMetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeMap`<sup>Required</sup> <a name="attributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMap"></a>

```typescript
public readonly attributeMap: FinspaceEnvironmentFederationParametersAttributeMapList;
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList">FinspaceEnvironmentFederationParametersAttributeMapList</a>

---

##### `applicationCallBackUrlInput`<sup>Optional</sup> <a name="applicationCallBackUrlInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrlInput"></a>

```typescript
public readonly applicationCallBackUrlInput: string;
```

- *Type:* string

---

##### `attributeMapInput`<sup>Optional</sup> <a name="attributeMapInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMapInput"></a>

```typescript
public readonly attributeMapInput: IResolvable | FinspaceEnvironmentFederationParametersAttributeMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>[]

---

##### `federationProviderNameInput`<sup>Optional</sup> <a name="federationProviderNameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderNameInput"></a>

```typescript
public readonly federationProviderNameInput: string;
```

- *Type:* string

---

##### `federationUrnInput`<sup>Optional</sup> <a name="federationUrnInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrnInput"></a>

```typescript
public readonly federationUrnInput: string;
```

- *Type:* string

---

##### `samlMetadataDocumentInput`<sup>Optional</sup> <a name="samlMetadataDocumentInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocumentInput"></a>

```typescript
public readonly samlMetadataDocumentInput: string;
```

- *Type:* string

---

##### `samlMetadataUrlInput`<sup>Optional</sup> <a name="samlMetadataUrlInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrlInput"></a>

```typescript
public readonly samlMetadataUrlInput: string;
```

- *Type:* string

---

##### `applicationCallBackUrl`<sup>Required</sup> <a name="applicationCallBackUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl"></a>

```typescript
public readonly applicationCallBackUrl: string;
```

- *Type:* string

---

##### `federationProviderName`<sup>Required</sup> <a name="federationProviderName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName"></a>

```typescript
public readonly federationProviderName: string;
```

- *Type:* string

---

##### `federationUrn`<sup>Required</sup> <a name="federationUrn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrn"></a>

```typescript
public readonly federationUrn: string;
```

- *Type:* string

---

##### `samlMetadataDocument`<sup>Required</sup> <a name="samlMetadataDocument" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument"></a>

```typescript
public readonly samlMetadataDocument: string;
```

- *Type:* string

---

##### `samlMetadataUrl`<sup>Required</sup> <a name="samlMetadataUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl"></a>

```typescript
public readonly samlMetadataUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceEnvironmentFederationParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

---


### FinspaceEnvironmentSuperuserParametersOutputReference <a name="FinspaceEnvironmentSuperuserParametersOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

new finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetLastName">resetLastName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetEmailAddress"></a>

```typescript
public resetEmailAddress(): void
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetLastName` <a name="resetLastName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetLastName"></a>

```typescript
public resetLastName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceEnvironmentSuperuserParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

---


### FinspaceEnvironmentTagsList <a name="FinspaceEnvironmentTagsList" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

new finspaceEnvironment.FinspaceEnvironmentTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get"></a>

```typescript
public get(index: number): FinspaceEnvironmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceEnvironmentTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>[]

---


### FinspaceEnvironmentTagsOutputReference <a name="FinspaceEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer"></a>

```typescript
import { finspaceEnvironment } from '@cdktn/provider-awscc'

new finspaceEnvironment.FinspaceEnvironmentTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FinspaceEnvironmentTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>

---




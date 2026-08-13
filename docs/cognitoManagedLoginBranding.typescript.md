# `cognitoManagedLoginBranding` Submodule <a name="`cognitoManagedLoginBranding` Submodule" id="@cdktn/provider-awscc.cognitoManagedLoginBranding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoManagedLoginBranding <a name="CognitoManagedLoginBranding" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding awscc_cognito_managed_login_branding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer"></a>

```typescript
import { cognitoManagedLoginBranding } from '@cdktn/provider-awscc'

new cognitoManagedLoginBranding.CognitoManagedLoginBranding(scope: Construct, id: string, config: CognitoManagedLoginBrandingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig">CognitoManagedLoginBrandingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig">CognitoManagedLoginBrandingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAssets">putAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetAssets">resetAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetReturnMergedResources">resetReturnMergedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetUseCognitoProvidedValues">resetUseCognitoProvidedValues</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssets` <a name="putAssets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAssets"></a>

```typescript
public putAssets(value: IResolvable | CognitoManagedLoginBrandingAssets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.putAssets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]

---

##### `resetAssets` <a name="resetAssets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetAssets"></a>

```typescript
public resetAssets(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetReturnMergedResources` <a name="resetReturnMergedResources" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetReturnMergedResources"></a>

```typescript
public resetReturnMergedResources(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetUseCognitoProvidedValues` <a name="resetUseCognitoProvidedValues" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.resetUseCognitoProvidedValues"></a>

```typescript
public resetUseCognitoProvidedValues(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CognitoManagedLoginBranding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct"></a>

```typescript
import { cognitoManagedLoginBranding } from '@cdktn/provider-awscc'

cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement"></a>

```typescript
import { cognitoManagedLoginBranding } from '@cdktn/provider-awscc'

cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource"></a>

```typescript
import { cognitoManagedLoginBranding } from '@cdktn/provider-awscc'

cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport"></a>

```typescript
import { cognitoManagedLoginBranding } from '@cdktn/provider-awscc'

cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CognitoManagedLoginBranding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoManagedLoginBranding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoManagedLoginBranding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CognitoManagedLoginBranding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assets">assets</a></code> | <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList">CognitoManagedLoginBrandingAssetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.managedLoginBrandingId">managedLoginBrandingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assetsInput">assetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.returnMergedResourcesInput">returnMergedResourcesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsInput">settingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValuesInput">useCognitoProvidedValuesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.returnMergedResources">returnMergedResources</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settings">settings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValues">useCognitoProvidedValues</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assets"></a>

```typescript
public readonly assets: CognitoManagedLoginBrandingAssetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList">CognitoManagedLoginBrandingAssetsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedLoginBrandingId`<sup>Required</sup> <a name="managedLoginBrandingId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.managedLoginBrandingId"></a>

```typescript
public readonly managedLoginBrandingId: string;
```

- *Type:* string

---

##### `assetsInput`<sup>Optional</sup> <a name="assetsInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.assetsInput"></a>

```typescript
public readonly assetsInput: IResolvable | CognitoManagedLoginBrandingAssets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `returnMergedResourcesInput`<sup>Optional</sup> <a name="returnMergedResourcesInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.returnMergedResourcesInput"></a>

```typescript
public readonly returnMergedResourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settingsInput"></a>

```typescript
public readonly settingsInput: string;
```

- *Type:* string

---

##### `useCognitoProvidedValuesInput`<sup>Optional</sup> <a name="useCognitoProvidedValuesInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValuesInput"></a>

```typescript
public readonly useCognitoProvidedValuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `returnMergedResources`<sup>Required</sup> <a name="returnMergedResources" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.returnMergedResources"></a>

```typescript
public readonly returnMergedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.settings"></a>

```typescript
public readonly settings: string;
```

- *Type:* string

---

##### `useCognitoProvidedValues`<sup>Required</sup> <a name="useCognitoProvidedValues" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.useCognitoProvidedValues"></a>

```typescript
public readonly useCognitoProvidedValues: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBranding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoManagedLoginBrandingAssets <a name="CognitoManagedLoginBrandingAssets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.Initializer"></a>

```typescript
import { cognitoManagedLoginBranding } from '@cdktn/provider-awscc'

const cognitoManagedLoginBrandingAssets: cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.bytes">bytes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#bytes CognitoManagedLoginBranding#bytes}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#category CognitoManagedLoginBranding#category}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.colorMode">colorMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#color_mode CognitoManagedLoginBranding#color_mode}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.extension">extension</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#extension CognitoManagedLoginBranding#extension}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#resource_id CognitoManagedLoginBranding#resource_id}. |

---

##### `bytes`<sup>Optional</sup> <a name="bytes" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.bytes"></a>

```typescript
public readonly bytes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#bytes CognitoManagedLoginBranding#bytes}.

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#category CognitoManagedLoginBranding#category}.

---

##### `colorMode`<sup>Optional</sup> <a name="colorMode" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.colorMode"></a>

```typescript
public readonly colorMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#color_mode CognitoManagedLoginBranding#color_mode}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.extension"></a>

```typescript
public readonly extension: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#extension CognitoManagedLoginBranding#extension}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#resource_id CognitoManagedLoginBranding#resource_id}.

---

### CognitoManagedLoginBrandingConfig <a name="CognitoManagedLoginBrandingConfig" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.Initializer"></a>

```typescript
import { cognitoManagedLoginBranding } from '@cdktn/provider-awscc'

const cognitoManagedLoginBrandingConfig: cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.assets">assets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#assets CognitoManagedLoginBranding#assets}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.returnMergedResources">returnMergedResources</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#return_merged_resources CognitoManagedLoginBranding#return_merged_resources}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.settings">settings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.useCognitoProvidedValues">useCognitoProvidedValues</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#user_pool_id CognitoManagedLoginBranding#user_pool_id}.

---

##### `assets`<sup>Optional</sup> <a name="assets" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.assets"></a>

```typescript
public readonly assets: IResolvable | CognitoManagedLoginBrandingAssets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#assets CognitoManagedLoginBranding#assets}.

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#client_id CognitoManagedLoginBranding#client_id}.

---

##### `returnMergedResources`<sup>Optional</sup> <a name="returnMergedResources" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.returnMergedResources"></a>

```typescript
public readonly returnMergedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#return_merged_resources CognitoManagedLoginBranding#return_merged_resources}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.settings"></a>

```typescript
public readonly settings: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#settings CognitoManagedLoginBranding#settings}.

---

##### `useCognitoProvidedValues`<sup>Optional</sup> <a name="useCognitoProvidedValues" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingConfig.property.useCognitoProvidedValues"></a>

```typescript
public readonly useCognitoProvidedValues: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cognito_managed_login_branding#use_cognito_provided_values CognitoManagedLoginBranding#use_cognito_provided_values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoManagedLoginBrandingAssetsList <a name="CognitoManagedLoginBrandingAssetsList" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer"></a>

```typescript
import { cognitoManagedLoginBranding } from '@cdktn/provider-awscc'

new cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.get"></a>

```typescript
public get(index: number): CognitoManagedLoginBrandingAssetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoManagedLoginBrandingAssets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>[]

---


### CognitoManagedLoginBrandingAssetsOutputReference <a name="CognitoManagedLoginBrandingAssetsOutputReference" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer"></a>

```typescript
import { cognitoManagedLoginBranding } from '@cdktn/provider-awscc'

new cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetBytes">resetBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetColorMode">resetColorMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBytes` <a name="resetBytes" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetBytes"></a>

```typescript
public resetBytes(): void
```

##### `resetCategory` <a name="resetCategory" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetColorMode` <a name="resetColorMode" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetColorMode"></a>

```typescript
public resetColorMode(): void
```

##### `resetExtension` <a name="resetExtension" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetExtension"></a>

```typescript
public resetExtension(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.resetResourceId"></a>

```typescript
public resetResourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.bytesInput">bytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.colorModeInput">colorModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.extensionInput">extensionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.bytes">bytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.colorMode">colorMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.extension">extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bytesInput`<sup>Optional</sup> <a name="bytesInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.bytesInput"></a>

```typescript
public readonly bytesInput: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `colorModeInput`<sup>Optional</sup> <a name="colorModeInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.colorModeInput"></a>

```typescript
public readonly colorModeInput: string;
```

- *Type:* string

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.extensionInput"></a>

```typescript
public readonly extensionInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.bytes"></a>

```typescript
public readonly bytes: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `colorMode`<sup>Required</sup> <a name="colorMode" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.colorMode"></a>

```typescript
public readonly colorMode: string;
```

- *Type:* string

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.extension"></a>

```typescript
public readonly extension: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CognitoManagedLoginBrandingAssets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cognitoManagedLoginBranding.CognitoManagedLoginBrandingAssets">CognitoManagedLoginBrandingAssets</a>

---




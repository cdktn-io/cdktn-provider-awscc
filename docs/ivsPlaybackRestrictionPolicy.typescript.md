# `ivsPlaybackRestrictionPolicy` Submodule <a name="`ivsPlaybackRestrictionPolicy` Submodule" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsPlaybackRestrictionPolicy <a name="IvsPlaybackRestrictionPolicy" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ivs_playback_restriction_policy awscc_ivs_playback_restriction_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer"></a>

```typescript
import { ivsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

new ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy(scope: Construct, id: string, config?: IvsPlaybackRestrictionPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig">IvsPlaybackRestrictionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig">IvsPlaybackRestrictionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetAllowedCountries">resetAllowedCountries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetEnableStrictOriginEnforcement">resetEnableStrictOriginEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.putTags"></a>

```typescript
public putTags(value: IResolvable | IvsPlaybackRestrictionPolicyTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>[]

---

##### `resetAllowedCountries` <a name="resetAllowedCountries" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetAllowedCountries"></a>

```typescript
public resetAllowedCountries(): void
```

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetAllowedOrigins"></a>

```typescript
public resetAllowedOrigins(): void
```

##### `resetEnableStrictOriginEnforcement` <a name="resetEnableStrictOriginEnforcement" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetEnableStrictOriginEnforcement"></a>

```typescript
public resetEnableStrictOriginEnforcement(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IvsPlaybackRestrictionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isConstruct"></a>

```typescript
import { ivsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformElement"></a>

```typescript
import { ivsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformResource"></a>

```typescript
import { ivsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generateConfigForImport"></a>

```typescript
import { ivsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IvsPlaybackRestrictionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IvsPlaybackRestrictionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IvsPlaybackRestrictionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ivs_playback_restriction_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IvsPlaybackRestrictionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList">IvsPlaybackRestrictionPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedCountriesInput">allowedCountriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.enableStrictOriginEnforcementInput">enableStrictOriginEnforcementInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedCountries">allowedCountries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.enableStrictOriginEnforcement">enableStrictOriginEnforcement</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.tags"></a>

```typescript
public readonly tags: IvsPlaybackRestrictionPolicyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList">IvsPlaybackRestrictionPolicyTagsList</a>

---

##### `allowedCountriesInput`<sup>Optional</sup> <a name="allowedCountriesInput" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedCountriesInput"></a>

```typescript
public readonly allowedCountriesInput: string[];
```

- *Type:* string[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `enableStrictOriginEnforcementInput`<sup>Optional</sup> <a name="enableStrictOriginEnforcementInput" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.enableStrictOriginEnforcementInput"></a>

```typescript
public readonly enableStrictOriginEnforcementInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IvsPlaybackRestrictionPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>[]

---

##### `allowedCountries`<sup>Required</sup> <a name="allowedCountries" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedCountries"></a>

```typescript
public readonly allowedCountries: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `enableStrictOriginEnforcement`<sup>Required</sup> <a name="enableStrictOriginEnforcement" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.enableStrictOriginEnforcement"></a>

```typescript
public readonly enableStrictOriginEnforcement: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvsPlaybackRestrictionPolicyConfig <a name="IvsPlaybackRestrictionPolicyConfig" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.Initializer"></a>

```typescript
import { ivsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

const ivsPlaybackRestrictionPolicyConfig: ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.allowedCountries">allowedCountries</a></code> | <code>string[]</code> | A list of country codes that control geoblocking restriction. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | A list of origin sites that control CORS restriction. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.enableStrictOriginEnforcement">enableStrictOriginEnforcement</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether channel playback is constrained by origin site. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.name">name</a></code> | <code>string</code> | Playback-restriction-policy name. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allowedCountries`<sup>Optional</sup> <a name="allowedCountries" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.allowedCountries"></a>

```typescript
public readonly allowedCountries: string[];
```

- *Type:* string[]

A list of country codes that control geoblocking restriction.

Allowed values are the officially assigned ISO 3166-1 alpha-2 codes. Default: All countries (an empty array).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ivs_playback_restriction_policy#allowed_countries IvsPlaybackRestrictionPolicy#allowed_countries}

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

A list of origin sites that control CORS restriction.

Allowed values are the same as valid values of the Origin header defined at https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ivs_playback_restriction_policy#allowed_origins IvsPlaybackRestrictionPolicy#allowed_origins}

---

##### `enableStrictOriginEnforcement`<sup>Optional</sup> <a name="enableStrictOriginEnforcement" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.enableStrictOriginEnforcement"></a>

```typescript
public readonly enableStrictOriginEnforcement: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether channel playback is constrained by origin site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ivs_playback_restriction_policy#enable_strict_origin_enforcement IvsPlaybackRestrictionPolicy#enable_strict_origin_enforcement}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Playback-restriction-policy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ivs_playback_restriction_policy#name IvsPlaybackRestrictionPolicy#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IvsPlaybackRestrictionPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ivs_playback_restriction_policy#tags IvsPlaybackRestrictionPolicy#tags}

---

### IvsPlaybackRestrictionPolicyTags <a name="IvsPlaybackRestrictionPolicyTags" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags.Initializer"></a>

```typescript
import { ivsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

const ivsPlaybackRestrictionPolicyTags: ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ivs_playback_restriction_policy#key IvsPlaybackRestrictionPolicy#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ivs_playback_restriction_policy#value IvsPlaybackRestrictionPolicy#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsPlaybackRestrictionPolicyTagsList <a name="IvsPlaybackRestrictionPolicyTagsList" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer"></a>

```typescript
import { ivsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

new ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.get"></a>

```typescript
public get(index: number): IvsPlaybackRestrictionPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsPlaybackRestrictionPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>[]

---


### IvsPlaybackRestrictionPolicyTagsOutputReference <a name="IvsPlaybackRestrictionPolicyTagsOutputReference" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer"></a>

```typescript
import { ivsPlaybackRestrictionPolicy } from '@cdktn/provider-awscc'

new ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsPlaybackRestrictionPolicyTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsPlaybackRestrictionPolicy.IvsPlaybackRestrictionPolicyTags">IvsPlaybackRestrictionPolicyTags</a>

---




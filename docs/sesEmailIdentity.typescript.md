# `sesEmailIdentity` Submodule <a name="`sesEmailIdentity` Submodule" id="@cdktn/provider-awscc.sesEmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesEmailIdentity <a name="SesEmailIdentity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity awscc_ses_email_identity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

new sesEmailIdentity.SesEmailIdentity(scope: Construct, id: string, config: SesEmailIdentityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig">SesEmailIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig">SesEmailIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putConfigurationSetAttributes">putConfigurationSetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimAttributes">putDkimAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes">putDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putFeedbackAttributes">putFeedbackAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putMailFromAttributes">putMailFromAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetConfigurationSetAttributes">resetConfigurationSetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimAttributes">resetDkimAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimSigningAttributes">resetDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetFeedbackAttributes">resetFeedbackAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetMailFromAttributes">resetMailFromAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigurationSetAttributes` <a name="putConfigurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putConfigurationSetAttributes"></a>

```typescript
public putConfigurationSetAttributes(value: SesEmailIdentityConfigurationSetAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putConfigurationSetAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

---

##### `putDkimAttributes` <a name="putDkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimAttributes"></a>

```typescript
public putDkimAttributes(value: SesEmailIdentityDkimAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

---

##### `putDkimSigningAttributes` <a name="putDkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes"></a>

```typescript
public putDkimSigningAttributes(value: SesEmailIdentityDkimSigningAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putDkimSigningAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

---

##### `putFeedbackAttributes` <a name="putFeedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putFeedbackAttributes"></a>

```typescript
public putFeedbackAttributes(value: SesEmailIdentityFeedbackAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putFeedbackAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

---

##### `putMailFromAttributes` <a name="putMailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putMailFromAttributes"></a>

```typescript
public putMailFromAttributes(value: SesEmailIdentityMailFromAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putMailFromAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putTags"></a>

```typescript
public putTags(value: IResolvable | SesEmailIdentityTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>[]

---

##### `resetConfigurationSetAttributes` <a name="resetConfigurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetConfigurationSetAttributes"></a>

```typescript
public resetConfigurationSetAttributes(): void
```

##### `resetDkimAttributes` <a name="resetDkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimAttributes"></a>

```typescript
public resetDkimAttributes(): void
```

##### `resetDkimSigningAttributes` <a name="resetDkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetDkimSigningAttributes"></a>

```typescript
public resetDkimSigningAttributes(): void
```

##### `resetFeedbackAttributes` <a name="resetFeedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetFeedbackAttributes"></a>

```typescript
public resetFeedbackAttributes(): void
```

##### `resetMailFromAttributes` <a name="resetMailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetMailFromAttributes"></a>

```typescript
public resetMailFromAttributes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesEmailIdentity resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isConstruct"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

sesEmailIdentity.SesEmailIdentity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformElement"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

sesEmailIdentity.SesEmailIdentity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformResource"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

sesEmailIdentity.SesEmailIdentity.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

sesEmailIdentity.SesEmailIdentity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SesEmailIdentity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesEmailIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesEmailIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SesEmailIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributes">configurationSetAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference">SesEmailIdentityConfigurationSetAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributes">dkimAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference">SesEmailIdentityDkimAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName1">dkimDnsTokenName1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName2">dkimDnsTokenName2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName3">dkimDnsTokenName3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue1">dkimDnsTokenValue1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue2">dkimDnsTokenValue2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue3">dkimDnsTokenValue3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributes">dkimSigningAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference">SesEmailIdentityDkimSigningAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributes">feedbackAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference">SesEmailIdentityFeedbackAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributes">mailFromAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference">SesEmailIdentityMailFromAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList">SesEmailIdentityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributesInput">configurationSetAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributesInput">dkimAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributesInput">dkimSigningAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentityInput">emailIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributesInput">feedbackAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributesInput">mailFromAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentity">emailIdentity</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configurationSetAttributes`<sup>Required</sup> <a name="configurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributes"></a>

```typescript
public readonly configurationSetAttributes: SesEmailIdentityConfigurationSetAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference">SesEmailIdentityConfigurationSetAttributesOutputReference</a>

---

##### `dkimAttributes`<sup>Required</sup> <a name="dkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributes"></a>

```typescript
public readonly dkimAttributes: SesEmailIdentityDkimAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference">SesEmailIdentityDkimAttributesOutputReference</a>

---

##### `dkimDnsTokenName1`<sup>Required</sup> <a name="dkimDnsTokenName1" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName1"></a>

```typescript
public readonly dkimDnsTokenName1: string;
```

- *Type:* string

---

##### `dkimDnsTokenName2`<sup>Required</sup> <a name="dkimDnsTokenName2" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName2"></a>

```typescript
public readonly dkimDnsTokenName2: string;
```

- *Type:* string

---

##### `dkimDnsTokenName3`<sup>Required</sup> <a name="dkimDnsTokenName3" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenName3"></a>

```typescript
public readonly dkimDnsTokenName3: string;
```

- *Type:* string

---

##### `dkimDnsTokenValue1`<sup>Required</sup> <a name="dkimDnsTokenValue1" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue1"></a>

```typescript
public readonly dkimDnsTokenValue1: string;
```

- *Type:* string

---

##### `dkimDnsTokenValue2`<sup>Required</sup> <a name="dkimDnsTokenValue2" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue2"></a>

```typescript
public readonly dkimDnsTokenValue2: string;
```

- *Type:* string

---

##### `dkimDnsTokenValue3`<sup>Required</sup> <a name="dkimDnsTokenValue3" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimDnsTokenValue3"></a>

```typescript
public readonly dkimDnsTokenValue3: string;
```

- *Type:* string

---

##### `dkimSigningAttributes`<sup>Required</sup> <a name="dkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributes"></a>

```typescript
public readonly dkimSigningAttributes: SesEmailIdentityDkimSigningAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference">SesEmailIdentityDkimSigningAttributesOutputReference</a>

---

##### `feedbackAttributes`<sup>Required</sup> <a name="feedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributes"></a>

```typescript
public readonly feedbackAttributes: SesEmailIdentityFeedbackAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference">SesEmailIdentityFeedbackAttributesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mailFromAttributes`<sup>Required</sup> <a name="mailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributes"></a>

```typescript
public readonly mailFromAttributes: SesEmailIdentityMailFromAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference">SesEmailIdentityMailFromAttributesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tags"></a>

```typescript
public readonly tags: SesEmailIdentityTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList">SesEmailIdentityTagsList</a>

---

##### `configurationSetAttributesInput`<sup>Optional</sup> <a name="configurationSetAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.configurationSetAttributesInput"></a>

```typescript
public readonly configurationSetAttributesInput: IResolvable | SesEmailIdentityConfigurationSetAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

---

##### `dkimAttributesInput`<sup>Optional</sup> <a name="dkimAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimAttributesInput"></a>

```typescript
public readonly dkimAttributesInput: IResolvable | SesEmailIdentityDkimAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

---

##### `dkimSigningAttributesInput`<sup>Optional</sup> <a name="dkimSigningAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.dkimSigningAttributesInput"></a>

```typescript
public readonly dkimSigningAttributesInput: IResolvable | SesEmailIdentityDkimSigningAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

---

##### `emailIdentityInput`<sup>Optional</sup> <a name="emailIdentityInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentityInput"></a>

```typescript
public readonly emailIdentityInput: string;
```

- *Type:* string

---

##### `feedbackAttributesInput`<sup>Optional</sup> <a name="feedbackAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.feedbackAttributesInput"></a>

```typescript
public readonly feedbackAttributesInput: IResolvable | SesEmailIdentityFeedbackAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

---

##### `mailFromAttributesInput`<sup>Optional</sup> <a name="mailFromAttributesInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.mailFromAttributesInput"></a>

```typescript
public readonly mailFromAttributesInput: IResolvable | SesEmailIdentityMailFromAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SesEmailIdentityTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>[]

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.emailIdentity"></a>

```typescript
public readonly emailIdentity: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesEmailIdentityConfig <a name="SesEmailIdentityConfig" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

const sesEmailIdentityConfig: sesEmailIdentity.SesEmailIdentityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.emailIdentity">emailIdentity</a></code> | <code>string</code> | The email address or domain to verify. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.configurationSetAttributes">configurationSetAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a></code> | Used to associate a configuration set with an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimAttributes">dkimAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a></code> | Used to enable or disable DKIM authentication for an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimSigningAttributes">dkimSigningAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a></code> | If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.feedbackAttributes">feedbackAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a></code> | Used to enable or disable feedback forwarding for an identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.mailFromAttributes">mailFromAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a></code> | Used to enable or disable the custom Mail-From domain configuration for an email identity. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>[]</code> | The tags (keys and values) associated with the email identity. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.emailIdentity"></a>

```typescript
public readonly emailIdentity: string;
```

- *Type:* string

The email address or domain to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#email_identity SesEmailIdentity#email_identity}

---

##### `configurationSetAttributes`<sup>Optional</sup> <a name="configurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.configurationSetAttributes"></a>

```typescript
public readonly configurationSetAttributes: SesEmailIdentityConfigurationSetAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

Used to associate a configuration set with an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#configuration_set_attributes SesEmailIdentity#configuration_set_attributes}

---

##### `dkimAttributes`<sup>Optional</sup> <a name="dkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimAttributes"></a>

```typescript
public readonly dkimAttributes: SesEmailIdentityDkimAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

Used to enable or disable DKIM authentication for an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#dkim_attributes SesEmailIdentity#dkim_attributes}

---

##### `dkimSigningAttributes`<sup>Optional</sup> <a name="dkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.dkimSigningAttributes"></a>

```typescript
public readonly dkimSigningAttributes: SesEmailIdentityDkimSigningAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for Easy DKIM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#dkim_signing_attributes SesEmailIdentity#dkim_signing_attributes}

---

##### `feedbackAttributes`<sup>Optional</sup> <a name="feedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.feedbackAttributes"></a>

```typescript
public readonly feedbackAttributes: SesEmailIdentityFeedbackAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

Used to enable or disable feedback forwarding for an identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#feedback_attributes SesEmailIdentity#feedback_attributes}

---

##### `mailFromAttributes`<sup>Optional</sup> <a name="mailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.mailFromAttributes"></a>

```typescript
public readonly mailFromAttributes: SesEmailIdentityMailFromAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

Used to enable or disable the custom Mail-From domain configuration for an email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#mail_from_attributes SesEmailIdentity#mail_from_attributes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SesEmailIdentityTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>[]

The tags (keys and values) associated with the email identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#tags SesEmailIdentity#tags}

---

### SesEmailIdentityConfigurationSetAttributes <a name="SesEmailIdentityConfigurationSetAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

const sesEmailIdentityConfigurationSetAttributes: sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | The configuration set to use by default when sending from this identity. |

---

##### `configurationSetName`<sup>Optional</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

The configuration set to use by default when sending from this identity.

Note that any configuration set defined in the email sending request takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#configuration_set_name SesEmailIdentity#configuration_set_name}

---

### SesEmailIdentityDkimAttributes <a name="SesEmailIdentityDkimAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

const sesEmailIdentityDkimAttributes: sesEmailIdentity.SesEmailIdentityDkimAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes.property.signingEnabled">signingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Sets the DKIM signing configuration for the identity. |

---

##### `signingEnabled`<sup>Optional</sup> <a name="signingEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes.property.signingEnabled"></a>

```typescript
public readonly signingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Sets the DKIM signing configuration for the identity.

When you set this value true, then the messages that are sent from the identity are signed using DKIM. If you set this value to false, your messages are sent without DKIM signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#signing_enabled SesEmailIdentity#signing_enabled}

---

### SesEmailIdentityDkimSigningAttributes <a name="SesEmailIdentityDkimSigningAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

const sesEmailIdentityDkimSigningAttributes: sesEmailIdentity.SesEmailIdentityDkimSigningAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey">domainSigningPrivateKey</a></code> | <code>string</code> | [Bring Your Own DKIM] A private key that's used to generate a DKIM signature. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningSelector">domainSigningSelector</a></code> | <code>string</code> | [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.nextSigningKeyLength">nextSigningKeyLength</a></code> | <code>string</code> | [Easy DKIM] The key length of the future DKIM key pair to be generated. |

---

##### `domainSigningPrivateKey`<sup>Optional</sup> <a name="domainSigningPrivateKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey"></a>

```typescript
public readonly domainSigningPrivateKey: string;
```

- *Type:* string

[Bring Your Own DKIM] A private key that's used to generate a DKIM signature.

The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#domain_signing_private_key SesEmailIdentity#domain_signing_private_key}

---

##### `domainSigningSelector`<sup>Optional</sup> <a name="domainSigningSelector" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.domainSigningSelector"></a>

```typescript
public readonly domainSigningSelector: string;
```

- *Type:* string

[Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#domain_signing_selector SesEmailIdentity#domain_signing_selector}

---

##### `nextSigningKeyLength`<sup>Optional</sup> <a name="nextSigningKeyLength" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes.property.nextSigningKeyLength"></a>

```typescript
public readonly nextSigningKeyLength: string;
```

- *Type:* string

[Easy DKIM] The key length of the future DKIM key pair to be generated.

This can be changed at most once per day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#next_signing_key_length SesEmailIdentity#next_signing_key_length}

---

### SesEmailIdentityFeedbackAttributes <a name="SesEmailIdentityFeedbackAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

const sesEmailIdentityFeedbackAttributes: sesEmailIdentity.SesEmailIdentityFeedbackAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes.property.emailForwardingEnabled">emailForwardingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If the value is true, you receive email notifications when bounce or complaint events occur. |

---

##### `emailForwardingEnabled`<sup>Optional</sup> <a name="emailForwardingEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes.property.emailForwardingEnabled"></a>

```typescript
public readonly emailForwardingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If the value is true, you receive email notifications when bounce or complaint events occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#email_forwarding_enabled SesEmailIdentity#email_forwarding_enabled}

---

### SesEmailIdentityMailFromAttributes <a name="SesEmailIdentityMailFromAttributes" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

const sesEmailIdentityMailFromAttributes: sesEmailIdentity.SesEmailIdentityMailFromAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.behaviorOnMxFailure">behaviorOnMxFailure</a></code> | <code>string</code> | The action to take if the required MX record isn't found when you send an email. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.mailFromDomain">mailFromDomain</a></code> | <code>string</code> | The custom MAIL FROM domain that you want the verified identity to use. |

---

##### `behaviorOnMxFailure`<sup>Optional</sup> <a name="behaviorOnMxFailure" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.behaviorOnMxFailure"></a>

```typescript
public readonly behaviorOnMxFailure: string;
```

- *Type:* string

The action to take if the required MX record isn't found when you send an email.

When you set this value to UseDefaultValue , the mail is sent using amazonses.com as the MAIL FROM domain. When you set this value to RejectMessage , the Amazon SES API v2 returns a MailFromDomainNotVerified error, and doesn't attempt to deliver the email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#behavior_on_mx_failure SesEmailIdentity#behavior_on_mx_failure}

---

##### `mailFromDomain`<sup>Optional</sup> <a name="mailFromDomain" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes.property.mailFromDomain"></a>

```typescript
public readonly mailFromDomain: string;
```

- *Type:* string

The custom MAIL FROM domain that you want the verified identity to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#mail_from_domain SesEmailIdentity#mail_from_domain}

---

### SesEmailIdentityTags <a name="SesEmailIdentityTags" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

const sesEmailIdentityTags: sesEmailIdentity.SesEmailIdentityTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#key SesEmailIdentity#key}. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#value SesEmailIdentity#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#key SesEmailIdentity#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_email_identity#value SesEmailIdentity#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesEmailIdentityConfigurationSetAttributesOutputReference <a name="SesEmailIdentityConfigurationSetAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

new sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resetConfigurationSetName">resetConfigurationSetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigurationSetName` <a name="resetConfigurationSetName" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.resetConfigurationSetName"></a>

```typescript
public resetConfigurationSetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetNameInput"></a>

```typescript
public readonly configurationSetNameInput: string;
```

- *Type:* string

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesEmailIdentityConfigurationSetAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityConfigurationSetAttributes">SesEmailIdentityConfigurationSetAttributes</a>

---


### SesEmailIdentityDkimAttributesOutputReference <a name="SesEmailIdentityDkimAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

new sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resetSigningEnabled">resetSigningEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSigningEnabled` <a name="resetSigningEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.resetSigningEnabled"></a>

```typescript
public resetSigningEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabledInput">signingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabled">signingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signingEnabledInput`<sup>Optional</sup> <a name="signingEnabledInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabledInput"></a>

```typescript
public readonly signingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `signingEnabled`<sup>Required</sup> <a name="signingEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.signingEnabled"></a>

```typescript
public readonly signingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesEmailIdentityDkimAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimAttributes">SesEmailIdentityDkimAttributes</a>

---


### SesEmailIdentityDkimSigningAttributesOutputReference <a name="SesEmailIdentityDkimSigningAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

new sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey">resetDomainSigningPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector">resetDomainSigningSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength">resetNextSigningKeyLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainSigningPrivateKey` <a name="resetDomainSigningPrivateKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey"></a>

```typescript
public resetDomainSigningPrivateKey(): void
```

##### `resetDomainSigningSelector` <a name="resetDomainSigningSelector" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector"></a>

```typescript
public resetDomainSigningSelector(): void
```

##### `resetNextSigningKeyLength` <a name="resetNextSigningKeyLength" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength"></a>

```typescript
public resetNextSigningKeyLength(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput">domainSigningPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput">domainSigningSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput">nextSigningKeyLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">domainSigningPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">domainSigningSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">nextSigningKeyLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainSigningPrivateKeyInput`<sup>Optional</sup> <a name="domainSigningPrivateKeyInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput"></a>

```typescript
public readonly domainSigningPrivateKeyInput: string;
```

- *Type:* string

---

##### `domainSigningSelectorInput`<sup>Optional</sup> <a name="domainSigningSelectorInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput"></a>

```typescript
public readonly domainSigningSelectorInput: string;
```

- *Type:* string

---

##### `nextSigningKeyLengthInput`<sup>Optional</sup> <a name="nextSigningKeyLengthInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput"></a>

```typescript
public readonly nextSigningKeyLengthInput: string;
```

- *Type:* string

---

##### `domainSigningPrivateKey`<sup>Required</sup> <a name="domainSigningPrivateKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```typescript
public readonly domainSigningPrivateKey: string;
```

- *Type:* string

---

##### `domainSigningSelector`<sup>Required</sup> <a name="domainSigningSelector" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```typescript
public readonly domainSigningSelector: string;
```

- *Type:* string

---

##### `nextSigningKeyLength`<sup>Required</sup> <a name="nextSigningKeyLength" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```typescript
public readonly nextSigningKeyLength: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesEmailIdentityDkimSigningAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityDkimSigningAttributes">SesEmailIdentityDkimSigningAttributes</a>

---


### SesEmailIdentityFeedbackAttributesOutputReference <a name="SesEmailIdentityFeedbackAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

new sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resetEmailForwardingEnabled">resetEmailForwardingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailForwardingEnabled` <a name="resetEmailForwardingEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.resetEmailForwardingEnabled"></a>

```typescript
public resetEmailForwardingEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabledInput">emailForwardingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabled">emailForwardingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailForwardingEnabledInput`<sup>Optional</sup> <a name="emailForwardingEnabledInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabledInput"></a>

```typescript
public readonly emailForwardingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `emailForwardingEnabled`<sup>Required</sup> <a name="emailForwardingEnabled" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.emailForwardingEnabled"></a>

```typescript
public readonly emailForwardingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesEmailIdentityFeedbackAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityFeedbackAttributes">SesEmailIdentityFeedbackAttributes</a>

---


### SesEmailIdentityMailFromAttributesOutputReference <a name="SesEmailIdentityMailFromAttributesOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

new sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetBehaviorOnMxFailure">resetBehaviorOnMxFailure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetMailFromDomain">resetMailFromDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBehaviorOnMxFailure` <a name="resetBehaviorOnMxFailure" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetBehaviorOnMxFailure"></a>

```typescript
public resetBehaviorOnMxFailure(): void
```

##### `resetMailFromDomain` <a name="resetMailFromDomain" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.resetMailFromDomain"></a>

```typescript
public resetMailFromDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailureInput">behaviorOnMxFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomainInput">mailFromDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailure">behaviorOnMxFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomain">mailFromDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorOnMxFailureInput`<sup>Optional</sup> <a name="behaviorOnMxFailureInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailureInput"></a>

```typescript
public readonly behaviorOnMxFailureInput: string;
```

- *Type:* string

---

##### `mailFromDomainInput`<sup>Optional</sup> <a name="mailFromDomainInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomainInput"></a>

```typescript
public readonly mailFromDomainInput: string;
```

- *Type:* string

---

##### `behaviorOnMxFailure`<sup>Required</sup> <a name="behaviorOnMxFailure" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.behaviorOnMxFailure"></a>

```typescript
public readonly behaviorOnMxFailure: string;
```

- *Type:* string

---

##### `mailFromDomain`<sup>Required</sup> <a name="mailFromDomain" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.mailFromDomain"></a>

```typescript
public readonly mailFromDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesEmailIdentityMailFromAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityMailFromAttributes">SesEmailIdentityMailFromAttributes</a>

---


### SesEmailIdentityTagsList <a name="SesEmailIdentityTagsList" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

new sesEmailIdentity.SesEmailIdentityTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.get"></a>

```typescript
public get(index: number): SesEmailIdentityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesEmailIdentityTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>[]

---


### SesEmailIdentityTagsOutputReference <a name="SesEmailIdentityTagsOutputReference" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer"></a>

```typescript
import { sesEmailIdentity } from '@cdktn/provider-awscc'

new sesEmailIdentity.SesEmailIdentityTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesEmailIdentityTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.sesEmailIdentity.SesEmailIdentityTags">SesEmailIdentityTags</a>

---




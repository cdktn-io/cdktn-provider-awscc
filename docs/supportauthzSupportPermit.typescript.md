# `supportauthzSupportPermit` Submodule <a name="`supportauthzSupportPermit` Submodule" id="@cdktn/provider-awscc.supportauthzSupportPermit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupportauthzSupportPermit <a name="SupportauthzSupportPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit awscc_supportauthz_support_permit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

new supportauthzSupportPermit.SupportauthzSupportPermit(scope: Construct, id: string, config: SupportauthzSupportPermitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig">SupportauthzSupportPermitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig">SupportauthzSupportPermitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit">putPermit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo">putSigningKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetSupportCaseDisplayId">resetSupportCaseDisplayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPermit` <a name="putPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit"></a>

```typescript
public putPermit(value: SupportauthzSupportPermitPermit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putPermit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

---

##### `putSigningKeyInfo` <a name="putSigningKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo"></a>

```typescript
public putSigningKeyInfo(value: SupportauthzSupportPermitSigningKeyInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putSigningKeyInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags"></a>

```typescript
public putTags(value: IResolvable | SupportauthzSupportPermitTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetSupportCaseDisplayId` <a name="resetSupportCaseDisplayId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetSupportCaseDisplayId"></a>

```typescript
public resetSupportCaseDisplayId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SupportauthzSupportPermit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SupportauthzSupportPermit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SupportauthzSupportPermit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SupportauthzSupportPermit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SupportauthzSupportPermit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permit">permit</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference">SupportauthzSupportPermitPermitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitId">permitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfo">signingKeyInfo</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference">SupportauthzSupportPermitSigningKeyInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList">SupportauthzSupportPermitTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitInput">permitInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfoInput">signingKeyInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayIdInput">supportCaseDisplayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayId">supportCaseDisplayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `permit`<sup>Required</sup> <a name="permit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permit"></a>

```typescript
public readonly permit: SupportauthzSupportPermitPermitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference">SupportauthzSupportPermitPermitOutputReference</a>

---

##### `permitId`<sup>Required</sup> <a name="permitId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitId"></a>

```typescript
public readonly permitId: string;
```

- *Type:* string

---

##### `signingKeyInfo`<sup>Required</sup> <a name="signingKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfo"></a>

```typescript
public readonly signingKeyInfo: SupportauthzSupportPermitSigningKeyInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference">SupportauthzSupportPermitSigningKeyInfoOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tags"></a>

```typescript
public readonly tags: SupportauthzSupportPermitTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList">SupportauthzSupportPermitTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permitInput`<sup>Optional</sup> <a name="permitInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.permitInput"></a>

```typescript
public readonly permitInput: IResolvable | SupportauthzSupportPermitPermit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

---

##### `signingKeyInfoInput`<sup>Optional</sup> <a name="signingKeyInfoInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.signingKeyInfoInput"></a>

```typescript
public readonly signingKeyInfoInput: IResolvable | SupportauthzSupportPermitSigningKeyInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

---

##### `supportCaseDisplayIdInput`<sup>Optional</sup> <a name="supportCaseDisplayIdInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayIdInput"></a>

```typescript
public readonly supportCaseDisplayIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SupportauthzSupportPermitTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `supportCaseDisplayId`<sup>Required</sup> <a name="supportCaseDisplayId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.supportCaseDisplayId"></a>

```typescript
public readonly supportCaseDisplayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SupportauthzSupportPermitConfig <a name="SupportauthzSupportPermitConfig" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

const supportauthzSupportPermitConfig: supportauthzSupportPermit.SupportauthzSupportPermitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.name">name</a></code> | <code>string</code> | The name of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.permit">permit</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | The grant definition: which actions on which resources, optionally constrained by time conditions. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.signingKeyInfo">signingKeyInfo</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | The signing key used by the permit. Exactly one key type must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.description">description</a></code> | <code>string</code> | An optional description of the support permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.supportCaseDisplayId">supportCaseDisplayId</a></code> | <code>string</code> | The support case display identifier associated with the permit. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]</code> | A list of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#name SupportauthzSupportPermit#name}

---

##### `permit`<sup>Required</sup> <a name="permit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.permit"></a>

```typescript
public readonly permit: SupportauthzSupportPermitPermit;
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

The grant definition: which actions on which resources, optionally constrained by time conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#permit SupportauthzSupportPermit#permit}

---

##### `signingKeyInfo`<sup>Required</sup> <a name="signingKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.signingKeyInfo"></a>

```typescript
public readonly signingKeyInfo: SupportauthzSupportPermitSigningKeyInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

The signing key used by the permit. Exactly one key type must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#signing_key_info SupportauthzSupportPermit#signing_key_info}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of the support permit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#description SupportauthzSupportPermit#description}

---

##### `supportCaseDisplayId`<sup>Optional</sup> <a name="supportCaseDisplayId" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.supportCaseDisplayId"></a>

```typescript
public readonly supportCaseDisplayId: string;
```

- *Type:* string

The support case display identifier associated with the permit.

When provided, the permit is linked to the specified AWS Support case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#support_case_display_id SupportauthzSupportPermit#support_case_display_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SupportauthzSupportPermitTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]

A list of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#tags SupportauthzSupportPermit#tags}

---

### SupportauthzSupportPermitPermit <a name="SupportauthzSupportPermitPermit" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

const supportauthzSupportPermitPermit: supportauthzSupportPermit.SupportauthzSupportPermitPermit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a></code> | The set of actions a support permit grants. Exactly one of AllActions or Actions must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a></code> | The set of resources a support permit applies to. Exactly one of AllResourcesInRegion or Resources must be provided. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]</code> | Optional time-bound conditions (at most two). |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.actions"></a>

```typescript
public readonly actions: SupportauthzSupportPermitPermitActions;
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

The set of actions a support permit grants. Exactly one of AllActions or Actions must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#actions SupportauthzSupportPermit#actions}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.resources"></a>

```typescript
public readonly resources: SupportauthzSupportPermitPermitResources;
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

The set of resources a support permit applies to. Exactly one of AllResourcesInRegion or Resources must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#resources SupportauthzSupportPermit#resources}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | SupportauthzSupportPermitPermitConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]

Optional time-bound conditions (at most two).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#conditions SupportauthzSupportPermit#conditions}

---

### SupportauthzSupportPermitPermitActions <a name="SupportauthzSupportPermitPermitActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

const supportauthzSupportPermitPermitActions: supportauthzSupportPermit.SupportauthzSupportPermitPermitActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.actions">actions</a></code> | <code>string[]</code> | An explicit list of actions to grant. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.allActions">allActions</a></code> | <code>string</code> | Grants all actions. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

An explicit list of actions to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#actions SupportauthzSupportPermit#actions}

---

##### `allActions`<sup>Optional</sup> <a name="allActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions.property.allActions"></a>

```typescript
public readonly allActions: string;
```

- *Type:* string

Grants all actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#all_actions SupportauthzSupportPermit#all_actions}

---

### SupportauthzSupportPermitPermitConditions <a name="SupportauthzSupportPermitPermitConditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

const supportauthzSupportPermitPermitConditions: supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowAfter">allowAfter</a></code> | <code>string</code> | The permit is active only after this time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowBefore">allowBefore</a></code> | <code>string</code> | The permit is active only before this time. |

---

##### `allowAfter`<sup>Optional</sup> <a name="allowAfter" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowAfter"></a>

```typescript
public readonly allowAfter: string;
```

- *Type:* string

The permit is active only after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#allow_after SupportauthzSupportPermit#allow_after}

---

##### `allowBefore`<sup>Optional</sup> <a name="allowBefore" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions.property.allowBefore"></a>

```typescript
public readonly allowBefore: string;
```

- *Type:* string

The permit is active only before this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#allow_before SupportauthzSupportPermit#allow_before}

---

### SupportauthzSupportPermitPermitResources <a name="SupportauthzSupportPermitPermitResources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

const supportauthzSupportPermitPermitResources: supportauthzSupportPermit.SupportauthzSupportPermitPermitResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.allResourcesInRegion">allResourcesInRegion</a></code> | <code>string</code> | Applies to all resources in the region. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.resources">resources</a></code> | <code>string[]</code> | An explicit list of resource ARNs. |

---

##### `allResourcesInRegion`<sup>Optional</sup> <a name="allResourcesInRegion" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.allResourcesInRegion"></a>

```typescript
public readonly allResourcesInRegion: string;
```

- *Type:* string

Applies to all resources in the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#all_resources_in_region SupportauthzSupportPermit#all_resources_in_region}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

An explicit list of resource ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#resources SupportauthzSupportPermit#resources}

---

### SupportauthzSupportPermitSigningKeyInfo <a name="SupportauthzSupportPermitSigningKeyInfo" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

const supportauthzSupportPermitSigningKeyInfo: supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.property.kmsKey">kmsKey</a></code> | <code>string</code> | The ARN of the KMS key used to sign permit grants. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The ARN of the KMS key used to sign permit grants.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#kms_key SupportauthzSupportPermit#kms_key}

---

### SupportauthzSupportPermitTags <a name="SupportauthzSupportPermitTags" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

const supportauthzSupportPermitTags: supportauthzSupportPermit.SupportauthzSupportPermitTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.value">value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#key SupportauthzSupportPermit#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/supportauthz_support_permit#value SupportauthzSupportPermit#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SupportauthzSupportPermitPermitActionsOutputReference <a name="SupportauthzSupportPermitPermitActionsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

new supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetAllActions">resetAllActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetAllActions` <a name="resetAllActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.resetAllActions"></a>

```typescript
public resetAllActions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActionsInput">allActionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActions">allActions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `allActionsInput`<sup>Optional</sup> <a name="allActionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActionsInput"></a>

```typescript
public readonly allActionsInput: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `allActions`<sup>Required</sup> <a name="allActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.allActions"></a>

```typescript
public readonly allActions: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupportauthzSupportPermitPermitActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

---


### SupportauthzSupportPermitPermitConditionsList <a name="SupportauthzSupportPermitPermitConditionsList" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

new supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get"></a>

```typescript
public get(index: number): SupportauthzSupportPermitPermitConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupportauthzSupportPermitPermitConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]

---


### SupportauthzSupportPermitPermitConditionsOutputReference <a name="SupportauthzSupportPermitPermitConditionsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

new supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowAfter">resetAllowAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowBefore">resetAllowBefore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAfter` <a name="resetAllowAfter" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowAfter"></a>

```typescript
public resetAllowAfter(): void
```

##### `resetAllowBefore` <a name="resetAllowBefore" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.resetAllowBefore"></a>

```typescript
public resetAllowBefore(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfterInput">allowAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBeforeInput">allowBeforeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter">allowAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore">allowBefore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAfterInput`<sup>Optional</sup> <a name="allowAfterInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfterInput"></a>

```typescript
public readonly allowAfterInput: string;
```

- *Type:* string

---

##### `allowBeforeInput`<sup>Optional</sup> <a name="allowBeforeInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBeforeInput"></a>

```typescript
public readonly allowBeforeInput: string;
```

- *Type:* string

---

##### `allowAfter`<sup>Required</sup> <a name="allowAfter" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowAfter"></a>

```typescript
public readonly allowAfter: string;
```

- *Type:* string

---

##### `allowBefore`<sup>Required</sup> <a name="allowBefore" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.allowBefore"></a>

```typescript
public readonly allowBefore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupportauthzSupportPermitPermitConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>

---


### SupportauthzSupportPermitPermitOutputReference <a name="SupportauthzSupportPermitPermitOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

new supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resetConditions">resetConditions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions"></a>

```typescript
public putActions(value: SupportauthzSupportPermitPermitActions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | SupportauthzSupportPermitPermitConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]

---

##### `putResources` <a name="putResources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources"></a>

```typescript
public putResources(value: SupportauthzSupportPermitPermitResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.resetConditions"></a>

```typescript
public resetConditions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference">SupportauthzSupportPermitPermitActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList">SupportauthzSupportPermitPermitConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference">SupportauthzSupportPermitPermitResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actionsInput">actionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actions"></a>

```typescript
public readonly actions: SupportauthzSupportPermitPermitActionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActionsOutputReference">SupportauthzSupportPermitPermitActionsOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditions"></a>

```typescript
public readonly conditions: SupportauthzSupportPermitPermitConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditionsList">SupportauthzSupportPermitPermitConditionsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resources"></a>

```typescript
public readonly resources: SupportauthzSupportPermitPermitResourcesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference">SupportauthzSupportPermitPermitResourcesOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | SupportauthzSupportPermitPermitActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitActions">SupportauthzSupportPermitPermitActions</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | SupportauthzSupportPermitPermitConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitConditions">SupportauthzSupportPermitPermitConditions</a>[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: IResolvable | SupportauthzSupportPermitPermitResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupportauthzSupportPermitPermit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermit">SupportauthzSupportPermitPermit</a>

---


### SupportauthzSupportPermitPermitResourcesOutputReference <a name="SupportauthzSupportPermitPermitResourcesOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

new supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetAllResourcesInRegion">resetAllResourcesInRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllResourcesInRegion` <a name="resetAllResourcesInRegion" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetAllResourcesInRegion"></a>

```typescript
public resetAllResourcesInRegion(): void
```

##### `resetResources` <a name="resetResources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegionInput">allResourcesInRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion">allResourcesInRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allResourcesInRegionInput`<sup>Optional</sup> <a name="allResourcesInRegionInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegionInput"></a>

```typescript
public readonly allResourcesInRegionInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `allResourcesInRegion`<sup>Required</sup> <a name="allResourcesInRegion" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.allResourcesInRegion"></a>

```typescript
public readonly allResourcesInRegion: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupportauthzSupportPermitPermitResources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitPermitResources">SupportauthzSupportPermitPermitResources</a>

---


### SupportauthzSupportPermitSigningKeyInfoOutputReference <a name="SupportauthzSupportPermitSigningKeyInfoOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

new supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupportauthzSupportPermitSigningKeyInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitSigningKeyInfo">SupportauthzSupportPermitSigningKeyInfo</a>

---


### SupportauthzSupportPermitTagsList <a name="SupportauthzSupportPermitTagsList" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

new supportauthzSupportPermit.SupportauthzSupportPermitTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get"></a>

```typescript
public get(index: number): SupportauthzSupportPermitTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupportauthzSupportPermitTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>[]

---


### SupportauthzSupportPermitTagsOutputReference <a name="SupportauthzSupportPermitTagsOutputReference" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer"></a>

```typescript
import { supportauthzSupportPermit } from '@cdktn/provider-awscc'

new supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SupportauthzSupportPermitTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.supportauthzSupportPermit.SupportauthzSupportPermitTags">SupportauthzSupportPermitTags</a>

---




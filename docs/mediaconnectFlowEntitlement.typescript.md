# `mediaconnectFlowEntitlement` Submodule <a name="`mediaconnectFlowEntitlement` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowEntitlement <a name="MediaconnectFlowEntitlement" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement awscc_mediaconnect_flow_entitlement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer"></a>

```typescript
import { mediaconnectFlowEntitlement } from '@cdktn/provider-awscc'

new mediaconnectFlowEntitlement.MediaconnectFlowEntitlement(scope: Construct, id: string, config: MediaconnectFlowEntitlementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig">MediaconnectFlowEntitlementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig">MediaconnectFlowEntitlementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetDataTransferSubscriberFeePercent">resetDataTransferSubscriberFeePercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEntitlementStatus">resetEntitlementStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryption` <a name="putEncryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption"></a>

```typescript
public putEncryption(value: MediaconnectFlowEntitlementEncryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putTags"></a>

```typescript
public putTags(value: IResolvable | MediaconnectFlowEntitlementTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]

---

##### `resetDataTransferSubscriberFeePercent` <a name="resetDataTransferSubscriberFeePercent" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetDataTransferSubscriberFeePercent"></a>

```typescript
public resetDataTransferSubscriberFeePercent(): void
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetEntitlementStatus` <a name="resetEntitlementStatus" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetEntitlementStatus"></a>

```typescript
public resetEntitlementStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectFlowEntitlement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isConstruct"></a>

```typescript
import { mediaconnectFlowEntitlement } from '@cdktn/provider-awscc'

mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformElement"></a>

```typescript
import { mediaconnectFlowEntitlement } from '@cdktn/provider-awscc'

mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformResource"></a>

```typescript
import { mediaconnectFlowEntitlement } from '@cdktn/provider-awscc'

mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport"></a>

```typescript
import { mediaconnectFlowEntitlement } from '@cdktn/provider-awscc'

mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MediaconnectFlowEntitlement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconnectFlowEntitlement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconnectFlowEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference">MediaconnectFlowEntitlementEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementArn">entitlementArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList">MediaconnectFlowEntitlementTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercentInput">dataTransferSubscriberFeePercentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryptionInput">encryptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatusInput">entitlementStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArnInput">flowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribersInput">subscribersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercent">dataTransferSubscriberFeePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatus">entitlementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArn">flowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribers">subscribers</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryption"></a>

```typescript
public readonly encryption: MediaconnectFlowEntitlementEncryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference">MediaconnectFlowEntitlementEncryptionOutputReference</a>

---

##### `entitlementArn`<sup>Required</sup> <a name="entitlementArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementArn"></a>

```typescript
public readonly entitlementArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tags"></a>

```typescript
public readonly tags: MediaconnectFlowEntitlementTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList">MediaconnectFlowEntitlementTagsList</a>

---

##### `dataTransferSubscriberFeePercentInput`<sup>Optional</sup> <a name="dataTransferSubscriberFeePercentInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercentInput"></a>

```typescript
public readonly dataTransferSubscriberFeePercentInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: IResolvable | MediaconnectFlowEntitlementEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

---

##### `entitlementStatusInput`<sup>Optional</sup> <a name="entitlementStatusInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatusInput"></a>

```typescript
public readonly entitlementStatusInput: string;
```

- *Type:* string

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArnInput"></a>

```typescript
public readonly flowArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `subscribersInput`<sup>Optional</sup> <a name="subscribersInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribersInput"></a>

```typescript
public readonly subscribersInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MediaconnectFlowEntitlementTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]

---

##### `dataTransferSubscriberFeePercent`<sup>Required</sup> <a name="dataTransferSubscriberFeePercent" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.dataTransferSubscriberFeePercent"></a>

```typescript
public readonly dataTransferSubscriberFeePercent: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `entitlementStatus`<sup>Required</sup> <a name="entitlementStatus" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.entitlementStatus"></a>

```typescript
public readonly entitlementStatus: string;
```

- *Type:* string

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.subscribers"></a>

```typescript
public readonly subscribers: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowEntitlementConfig <a name="MediaconnectFlowEntitlementConfig" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.Initializer"></a>

```typescript
import { mediaconnectFlowEntitlement } from '@cdktn/provider-awscc'

const mediaconnectFlowEntitlementConfig: mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.description">description</a></code> | <code>string</code> | A description of the entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.flowArn">flowArn</a></code> | <code>string</code> | The ARN of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.name">name</a></code> | <code>string</code> | The name of the entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.subscribers">subscribers</a></code> | <code>string[]</code> | The AWS account IDs that you want to share your content with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dataTransferSubscriberFeePercent">dataTransferSubscriberFeePercent</a></code> | <code>number</code> | Percentage from 0-100 of the data transfer cost to be billed to the subscriber. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.encryption">encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a></code> | The type of encryption that will be used on the output that is associated with this entitlement. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.entitlementStatus">entitlementStatus</a></code> | <code>string</code> | An indication of whether the entitlement is enabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]</code> | Key-value pairs that can be used to tag and organize this flow entitlement. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#description MediaconnectFlowEntitlement#description}

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

The ARN of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#flow_arn MediaconnectFlowEntitlement#flow_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#name MediaconnectFlowEntitlement#name}

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.subscribers"></a>

```typescript
public readonly subscribers: string[];
```

- *Type:* string[]

The AWS account IDs that you want to share your content with.

The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#subscribers MediaconnectFlowEntitlement#subscribers}

---

##### `dataTransferSubscriberFeePercent`<sup>Optional</sup> <a name="dataTransferSubscriberFeePercent" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.dataTransferSubscriberFeePercent"></a>

```typescript
public readonly dataTransferSubscriberFeePercent: number;
```

- *Type:* number

Percentage from 0-100 of the data transfer cost to be billed to the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#data_transfer_subscriber_fee_percent MediaconnectFlowEntitlement#data_transfer_subscriber_fee_percent}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.encryption"></a>

```typescript
public readonly encryption: MediaconnectFlowEntitlementEncryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

The type of encryption that will be used on the output that is associated with this entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#encryption MediaconnectFlowEntitlement#encryption}

---

##### `entitlementStatus`<sup>Optional</sup> <a name="entitlementStatus" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.entitlementStatus"></a>

```typescript
public readonly entitlementStatus: string;
```

- *Type:* string

An indication of whether the entitlement is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#entitlement_status MediaconnectFlowEntitlement#entitlement_status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MediaconnectFlowEntitlementTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]

Key-value pairs that can be used to tag and organize this flow entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#tags MediaconnectFlowEntitlement#tags}

---

### MediaconnectFlowEntitlementEncryption <a name="MediaconnectFlowEntitlementEncryption" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.Initializer"></a>

```typescript
import { mediaconnectFlowEntitlement } from '@cdktn/provider-awscc'

const mediaconnectFlowEntitlementEncryption: mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.algorithm">algorithm</a></code> | <code>string</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.constantInitializationVector">constantInitializationVector</a></code> | <code>string</code> | A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.deviceId">deviceId</a></code> | <code>string</code> | The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.keyType">keyType</a></code> | <code>string</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.region">region</a></code> | <code>string</code> | The AWS Region that the API Gateway proxy endpoint was created in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.resourceId">resourceId</a></code> | <code>string</code> | An identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.secretArn">secretArn</a></code> | <code>string</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.url">url</a></code> | <code>string</code> | The URL from the API Gateway proxy that you set up to talk to your key server. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#algorithm MediaconnectFlowEntitlement#algorithm}

---

##### `constantInitializationVector`<sup>Optional</sup> <a name="constantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.constantInitializationVector"></a>

```typescript
public readonly constantInitializationVector: string;
```

- *Type:* string

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#constant_initialization_vector MediaconnectFlowEntitlement#constant_initialization_vector}

---

##### `deviceId`<sup>Optional</sup> <a name="deviceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#device_id MediaconnectFlowEntitlement#device_id}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#key_type MediaconnectFlowEntitlement#key_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#region MediaconnectFlowEntitlement#region}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#resource_id MediaconnectFlowEntitlement#resource_id}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#role_arn MediaconnectFlowEntitlement#role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#secret_arn MediaconnectFlowEntitlement#secret_arn}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#url MediaconnectFlowEntitlement#url}

---

### MediaconnectFlowEntitlementTags <a name="MediaconnectFlowEntitlementTags" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.Initializer"></a>

```typescript
import { mediaconnectFlowEntitlement } from '@cdktn/provider-awscc'

const mediaconnectFlowEntitlementTags: mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#key MediaconnectFlowEntitlement#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#value MediaconnectFlowEntitlement#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#key MediaconnectFlowEntitlement#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_entitlement#value MediaconnectFlowEntitlement#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowEntitlementEncryptionOutputReference <a name="MediaconnectFlowEntitlementEncryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowEntitlement } from '@cdktn/provider-awscc'

new mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetConstantInitializationVector">resetConstantInitializationVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetDeviceId">resetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetConstantInitializationVector` <a name="resetConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetConstantInitializationVector"></a>

```typescript
public resetConstantInitializationVector(): void
```

##### `resetDeviceId` <a name="resetDeviceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetDeviceId"></a>

```typescript
public resetDeviceId(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetKeyType"></a>

```typescript
public resetKeyType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVectorInput">constantInitializationVectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceIdInput">deviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVector">constantInitializationVector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `constantInitializationVectorInput`<sup>Optional</sup> <a name="constantInitializationVectorInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVectorInput"></a>

```typescript
public readonly constantInitializationVectorInput: string;
```

- *Type:* string

---

##### `deviceIdInput`<sup>Optional</sup> <a name="deviceIdInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceIdInput"></a>

```typescript
public readonly deviceIdInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `constantInitializationVector`<sup>Required</sup> <a name="constantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.constantInitializationVector"></a>

```typescript
public readonly constantInitializationVector: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowEntitlementEncryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementEncryption">MediaconnectFlowEntitlementEncryption</a>

---


### MediaconnectFlowEntitlementTagsList <a name="MediaconnectFlowEntitlementTagsList" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer"></a>

```typescript
import { mediaconnectFlowEntitlement } from '@cdktn/provider-awscc'

new mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.get"></a>

```typescript
public get(index: number): MediaconnectFlowEntitlementTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowEntitlementTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>[]

---


### MediaconnectFlowEntitlementTagsOutputReference <a name="MediaconnectFlowEntitlementTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowEntitlement } from '@cdktn/provider-awscc'

new mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowEntitlementTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowEntitlement.MediaconnectFlowEntitlementTags">MediaconnectFlowEntitlementTags</a>

---




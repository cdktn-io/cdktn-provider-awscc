# `vpclatticeAccessLogSubscription` Submodule <a name="`vpclatticeAccessLogSubscription` Submodule" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeAccessLogSubscription <a name="VpclatticeAccessLogSubscription" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription awscc_vpclattice_access_log_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer"></a>

```typescript
import { vpclatticeAccessLogSubscription } from '@cdktn/provider-awscc'

new vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription(scope: Construct, id: string, config: VpclatticeAccessLogSubscriptionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig">VpclatticeAccessLogSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig">VpclatticeAccessLogSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetResourceIdentifier">resetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetServiceNetworkLogType">resetServiceNetworkLogType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.putTags"></a>

```typescript
public putTags(value: IResolvable | VpclatticeAccessLogSubscriptionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]

---

##### `resetResourceIdentifier` <a name="resetResourceIdentifier" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetResourceIdentifier"></a>

```typescript
public resetResourceIdentifier(): void
```

##### `resetServiceNetworkLogType` <a name="resetServiceNetworkLogType" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetServiceNetworkLogType"></a>

```typescript
public resetServiceNetworkLogType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeAccessLogSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isConstruct"></a>

```typescript
import { vpclatticeAccessLogSubscription } from '@cdktn/provider-awscc'

vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformElement"></a>

```typescript
import { vpclatticeAccessLogSubscription } from '@cdktn/provider-awscc'

vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformResource"></a>

```typescript
import { vpclatticeAccessLogSubscription } from '@cdktn/provider-awscc'

vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.generateConfigForImport"></a>

```typescript
import { vpclatticeAccessLogSubscription } from '@cdktn/provider-awscc'

vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a VpclatticeAccessLogSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeAccessLogSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeAccessLogSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeAccessLogSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.accessLogSubscriptionId">accessLogSubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList">VpclatticeAccessLogSubscriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.destinationArnInput">destinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceIdentifierInput">resourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.serviceNetworkLogTypeInput">serviceNetworkLogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.serviceNetworkLogType">serviceNetworkLogType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessLogSubscriptionId`<sup>Required</sup> <a name="accessLogSubscriptionId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.accessLogSubscriptionId"></a>

```typescript
public readonly accessLogSubscriptionId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.tags"></a>

```typescript
public readonly tags: VpclatticeAccessLogSubscriptionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList">VpclatticeAccessLogSubscriptionTagsList</a>

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.destinationArnInput"></a>

```typescript
public readonly destinationArnInput: string;
```

- *Type:* string

---

##### `resourceIdentifierInput`<sup>Optional</sup> <a name="resourceIdentifierInput" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceIdentifierInput"></a>

```typescript
public readonly resourceIdentifierInput: string;
```

- *Type:* string

---

##### `serviceNetworkLogTypeInput`<sup>Optional</sup> <a name="serviceNetworkLogTypeInput" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.serviceNetworkLogTypeInput"></a>

```typescript
public readonly serviceNetworkLogTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | VpclatticeAccessLogSubscriptionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

---

##### `serviceNetworkLogType`<sup>Required</sup> <a name="serviceNetworkLogType" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.serviceNetworkLogType"></a>

```typescript
public readonly serviceNetworkLogType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscription.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeAccessLogSubscriptionConfig <a name="VpclatticeAccessLogSubscriptionConfig" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.Initializer"></a>

```typescript
import { vpclatticeAccessLogSubscription } from '@cdktn/provider-awscc'

const vpclatticeAccessLogSubscriptionConfig: vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.destinationArn">destinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription#destination_arn VpclatticeAccessLogSubscription#destination_arn}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription#resource_identifier VpclatticeAccessLogSubscription#resource_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.serviceNetworkLogType">serviceNetworkLogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription#service_network_log_type VpclatticeAccessLogSubscription#service_network_log_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription#tags VpclatticeAccessLogSubscription#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription#destination_arn VpclatticeAccessLogSubscription#destination_arn}.

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription#resource_identifier VpclatticeAccessLogSubscription#resource_identifier}.

---

##### `serviceNetworkLogType`<sup>Optional</sup> <a name="serviceNetworkLogType" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.serviceNetworkLogType"></a>

```typescript
public readonly serviceNetworkLogType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription#service_network_log_type VpclatticeAccessLogSubscription#service_network_log_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | VpclatticeAccessLogSubscriptionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription#tags VpclatticeAccessLogSubscription#tags}.

---

### VpclatticeAccessLogSubscriptionTags <a name="VpclatticeAccessLogSubscriptionTags" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags.Initializer"></a>

```typescript
import { vpclatticeAccessLogSubscription } from '@cdktn/provider-awscc'

const vpclatticeAccessLogSubscriptionTags: vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription#key VpclatticeAccessLogSubscription#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription#value VpclatticeAccessLogSubscription#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription#key VpclatticeAccessLogSubscription#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/vpclattice_access_log_subscription#value VpclatticeAccessLogSubscription#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeAccessLogSubscriptionTagsList <a name="VpclatticeAccessLogSubscriptionTagsList" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer"></a>

```typescript
import { vpclatticeAccessLogSubscription } from '@cdktn/provider-awscc'

new vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.get"></a>

```typescript
public get(index: number): VpclatticeAccessLogSubscriptionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeAccessLogSubscriptionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>[]

---


### VpclatticeAccessLogSubscriptionTagsOutputReference <a name="VpclatticeAccessLogSubscriptionTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer"></a>

```typescript
import { vpclatticeAccessLogSubscription } from '@cdktn/provider-awscc'

new vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpclatticeAccessLogSubscriptionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.vpclatticeAccessLogSubscription.VpclatticeAccessLogSubscriptionTags">VpclatticeAccessLogSubscriptionTags</a>

---




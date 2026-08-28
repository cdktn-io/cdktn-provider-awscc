# `detectiveMemberInvitation` Submodule <a name="`detectiveMemberInvitation` Submodule" id="@cdktn/provider-awscc.detectiveMemberInvitation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DetectiveMemberInvitation <a name="DetectiveMemberInvitation" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation awscc_detective_member_invitation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer"></a>

```typescript
import { detectiveMemberInvitation } from '@cdktn/provider-awscc'

new detectiveMemberInvitation.DetectiveMemberInvitation(scope: Construct, id: string, config: DetectiveMemberInvitationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig">DetectiveMemberInvitationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig">DetectiveMemberInvitationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetDisableEmailNotification">resetDisableEmailNotification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDisableEmailNotification` <a name="resetDisableEmailNotification" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetDisableEmailNotification"></a>

```typescript
public resetDisableEmailNotification(): void
```

##### `resetMessage` <a name="resetMessage" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.resetMessage"></a>

```typescript
public resetMessage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DetectiveMemberInvitation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isConstruct"></a>

```typescript
import { detectiveMemberInvitation } from '@cdktn/provider-awscc'

detectiveMemberInvitation.DetectiveMemberInvitation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformElement"></a>

```typescript
import { detectiveMemberInvitation } from '@cdktn/provider-awscc'

detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformResource"></a>

```typescript
import { detectiveMemberInvitation } from '@cdktn/provider-awscc'

detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport"></a>

```typescript
import { detectiveMemberInvitation } from '@cdktn/provider-awscc'

detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DetectiveMemberInvitation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DetectiveMemberInvitation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DetectiveMemberInvitation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DetectiveMemberInvitation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.disableEmailNotificationInput">disableEmailNotificationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.graphArnInput">graphArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberEmailAddressInput">memberEmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberIdInput">memberIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.disableEmailNotification">disableEmailNotification</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.graphArn">graphArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberEmailAddress">memberEmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberId">memberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.message">message</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `disableEmailNotificationInput`<sup>Optional</sup> <a name="disableEmailNotificationInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.disableEmailNotificationInput"></a>

```typescript
public readonly disableEmailNotificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `graphArnInput`<sup>Optional</sup> <a name="graphArnInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.graphArnInput"></a>

```typescript
public readonly graphArnInput: string;
```

- *Type:* string

---

##### `memberEmailAddressInput`<sup>Optional</sup> <a name="memberEmailAddressInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberEmailAddressInput"></a>

```typescript
public readonly memberEmailAddressInput: string;
```

- *Type:* string

---

##### `memberIdInput`<sup>Optional</sup> <a name="memberIdInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberIdInput"></a>

```typescript
public readonly memberIdInput: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `disableEmailNotification`<sup>Required</sup> <a name="disableEmailNotification" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.disableEmailNotification"></a>

```typescript
public readonly disableEmailNotification: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `graphArn`<sup>Required</sup> <a name="graphArn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.graphArn"></a>

```typescript
public readonly graphArn: string;
```

- *Type:* string

---

##### `memberEmailAddress`<sup>Required</sup> <a name="memberEmailAddress" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberEmailAddress"></a>

```typescript
public readonly memberEmailAddress: string;
```

- *Type:* string

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.memberId"></a>

```typescript
public readonly memberId: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DetectiveMemberInvitationConfig <a name="DetectiveMemberInvitationConfig" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.Initializer"></a>

```typescript
import { detectiveMemberInvitation } from '@cdktn/provider-awscc'

const detectiveMemberInvitationConfig: detectiveMemberInvitation.DetectiveMemberInvitationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.graphArn">graphArn</a></code> | <code>string</code> | The ARN of the graph to which the member account will be invited. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.memberEmailAddress">memberEmailAddress</a></code> | <code>string</code> | The root email address for the account to be invited, for validation. Updating this field has no effect. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.memberId">memberId</a></code> | <code>string</code> | The AWS account ID to be invited to join the graph as a member. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.disableEmailNotification">disableEmailNotification</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, invitation emails are not sent to the member accounts. |
| <code><a href="#@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.message">message</a></code> | <code>string</code> | A message to be included in the email invitation sent to the invited account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `graphArn`<sup>Required</sup> <a name="graphArn" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.graphArn"></a>

```typescript
public readonly graphArn: string;
```

- *Type:* string

The ARN of the graph to which the member account will be invited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation#graph_arn DetectiveMemberInvitation#graph_arn}

---

##### `memberEmailAddress`<sup>Required</sup> <a name="memberEmailAddress" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.memberEmailAddress"></a>

```typescript
public readonly memberEmailAddress: string;
```

- *Type:* string

The root email address for the account to be invited, for validation. Updating this field has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation#member_email_address DetectiveMemberInvitation#member_email_address}

---

##### `memberId`<sup>Required</sup> <a name="memberId" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.memberId"></a>

```typescript
public readonly memberId: string;
```

- *Type:* string

The AWS account ID to be invited to join the graph as a member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation#member_id DetectiveMemberInvitation#member_id}

---

##### `disableEmailNotification`<sup>Optional</sup> <a name="disableEmailNotification" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.disableEmailNotification"></a>

```typescript
public readonly disableEmailNotification: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, invitation emails are not sent to the member accounts.

Member accounts must still accept the invitation before they are added to the behavior graph. Updating this field has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation#disable_email_notification DetectiveMemberInvitation#disable_email_notification}

---

##### `message`<sup>Optional</sup> <a name="message" id="@cdktn/provider-awscc.detectiveMemberInvitation.DetectiveMemberInvitationConfig.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

A message to be included in the email invitation sent to the invited account.

Updating this field has no effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/detective_member_invitation#message DetectiveMemberInvitation#message}

---




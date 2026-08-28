# `notificationscontactsEmailContact` Submodule <a name="`notificationscontactsEmailContact` Submodule" id="@cdktn/provider-awscc.notificationscontactsEmailContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationscontactsEmailContact <a name="NotificationscontactsEmailContact" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notificationscontacts_email_contact awscc_notificationscontacts_email_contact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktn/provider-awscc'

new notificationscontactsEmailContact.NotificationscontactsEmailContact(scope: Construct, id: string, config: NotificationscontactsEmailContactConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig">NotificationscontactsEmailContactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig">NotificationscontactsEmailContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.putTags"></a>

```typescript
public putTags(value: IResolvable | NotificationscontactsEmailContactTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationscontactsEmailContact resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktn/provider-awscc'

notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktn/provider-awscc'

notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktn/provider-awscc'

notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktn/provider-awscc'

notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NotificationscontactsEmailContact resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationscontactsEmailContact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationscontactsEmailContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notificationscontacts_email_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NotificationscontactsEmailContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailContact">emailContact</a></code> | <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference">NotificationscontactsEmailContactEmailContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList">NotificationscontactsEmailContactTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `emailContact`<sup>Required</sup> <a name="emailContact" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailContact"></a>

```typescript
public readonly emailContact: NotificationscontactsEmailContactEmailContactOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference">NotificationscontactsEmailContactEmailContactOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tags"></a>

```typescript
public readonly tags: NotificationscontactsEmailContactTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList">NotificationscontactsEmailContactTagsList</a>

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | NotificationscontactsEmailContactTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>[]

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContact.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationscontactsEmailContactConfig <a name="NotificationscontactsEmailContactConfig" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.Initializer"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktn/provider-awscc'

const notificationscontactsEmailContactConfig: notificationscontactsEmailContact.NotificationscontactsEmailContactConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notificationscontacts_email_contact#email_address NotificationscontactsEmailContact#email_address}. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notificationscontacts_email_contact#name NotificationscontactsEmailContact#name}. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>[]</code> | A list of tags that are attached to the role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notificationscontacts_email_contact#email_address NotificationscontactsEmailContact#email_address}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notificationscontacts_email_contact#name NotificationscontactsEmailContact#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | NotificationscontactsEmailContactTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>[]

A list of tags that are attached to the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notificationscontacts_email_contact#tags NotificationscontactsEmailContact#tags}

---

### NotificationscontactsEmailContactEmailContact <a name="NotificationscontactsEmailContactEmailContact" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContact.Initializer"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktn/provider-awscc'

const notificationscontactsEmailContactEmailContact: notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContact = { ... }
```


### NotificationscontactsEmailContactTags <a name="NotificationscontactsEmailContactTags" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.Initializer"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktn/provider-awscc'

const notificationscontactsEmailContactTags: notificationscontactsEmailContact.NotificationscontactsEmailContactTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notificationscontacts_email_contact#key NotificationscontactsEmailContact#key}. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notificationscontacts_email_contact#value NotificationscontactsEmailContact#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notificationscontacts_email_contact#key NotificationscontactsEmailContact#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/notificationscontacts_email_contact#value NotificationscontactsEmailContact#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationscontactsEmailContactEmailContactOutputReference <a name="NotificationscontactsEmailContactEmailContactOutputReference" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktn/provider-awscc'

new notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContact">NotificationscontactsEmailContactEmailContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NotificationscontactsEmailContactEmailContact;
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactEmailContact">NotificationscontactsEmailContactEmailContact</a>

---


### NotificationscontactsEmailContactTagsList <a name="NotificationscontactsEmailContactTagsList" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktn/provider-awscc'

new notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.get"></a>

```typescript
public get(index: number): NotificationscontactsEmailContactTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationscontactsEmailContactTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>[]

---


### NotificationscontactsEmailContactTagsOutputReference <a name="NotificationscontactsEmailContactTagsOutputReference" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer"></a>

```typescript
import { notificationscontactsEmailContact } from '@cdktn/provider-awscc'

new notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationscontactsEmailContactTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.notificationscontactsEmailContact.NotificationscontactsEmailContactTags">NotificationscontactsEmailContactTags</a>

---




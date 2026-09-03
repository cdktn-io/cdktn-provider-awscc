# `customerprofilesDomainObjectType` Submodule <a name="`customerprofilesDomainObjectType` Submodule" id="@cdktn/provider-awscc.customerprofilesDomainObjectType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesDomainObjectType <a name="CustomerprofilesDomainObjectType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type awscc_customerprofiles_domain_object_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer"></a>

```typescript
import { customerprofilesDomainObjectType } from '@cdktn/provider-awscc'

new customerprofilesDomainObjectType.CustomerprofilesDomainObjectType(scope: Construct, id: string, config: CustomerprofilesDomainObjectTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig">CustomerprofilesDomainObjectTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig">CustomerprofilesDomainObjectTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putFields"></a>

```typescript
public putFields(value: IResolvable | {[ key: string ]: CustomerprofilesDomainObjectTypeFields}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>}

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putTags"></a>

```typescript
public putTags(value: IResolvable | CustomerprofilesDomainObjectTypeTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesDomainObjectType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isConstruct"></a>

```typescript
import { customerprofilesDomainObjectType } from '@cdktn/provider-awscc'

customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformElement"></a>

```typescript
import { customerprofilesDomainObjectType } from '@cdktn/provider-awscc'

customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformResource"></a>

```typescript
import { customerprofilesDomainObjectType } from '@cdktn/provider-awscc'

customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport"></a>

```typescript
import { customerprofilesDomainObjectType } from '@cdktn/provider-awscc'

customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CustomerprofilesDomainObjectType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesDomainObjectType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesDomainObjectType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesDomainObjectType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap">CustomerprofilesDomainObjectTypeFieldsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList">CustomerprofilesDomainObjectTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeNameInput">objectTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fields"></a>

```typescript
public readonly fields: CustomerprofilesDomainObjectTypeFieldsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap">CustomerprofilesDomainObjectTypeFieldsMap</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tags"></a>

```typescript
public readonly tags: CustomerprofilesDomainObjectTypeTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList">CustomerprofilesDomainObjectTypeTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | {[ key: string ]: CustomerprofilesDomainObjectTypeFields};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>}

---

##### `objectTypeNameInput`<sup>Optional</sup> <a name="objectTypeNameInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeNameInput"></a>

```typescript
public readonly objectTypeNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CustomerprofilesDomainObjectTypeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesDomainObjectTypeConfig <a name="CustomerprofilesDomainObjectTypeConfig" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.Initializer"></a>

```typescript
import { customerprofilesDomainObjectType } from '@cdktn/provider-awscc'

const customerprofilesDomainObjectTypeConfig: customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.domainName">domainName</a></code> | <code>string</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.fields">fields</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>}</code> | A map of the name and ObjectType field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.objectTypeName">objectTypeName</a></code> | <code>string</code> | The name of the domain object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.description">description</a></code> | <code>string</code> | Description of the domain object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | The default encryption key. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#domain_name CustomerprofilesDomainObjectType#domain_name}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.fields"></a>

```typescript
public readonly fields: IResolvable | {[ key: string ]: CustomerprofilesDomainObjectTypeFields};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>}

A map of the name and ObjectType field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#fields CustomerprofilesDomainObjectType#fields}

---

##### `objectTypeName`<sup>Required</sup> <a name="objectTypeName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.objectTypeName"></a>

```typescript
public readonly objectTypeName: string;
```

- *Type:* string

The name of the domain object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#object_type_name CustomerprofilesDomainObjectType#object_type_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the domain object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#description CustomerprofilesDomainObjectType#description}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

The default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#encryption_key CustomerprofilesDomainObjectType#encryption_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CustomerprofilesDomainObjectTypeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#tags CustomerprofilesDomainObjectType#tags}

---

### CustomerprofilesDomainObjectTypeFields <a name="CustomerprofilesDomainObjectTypeFields" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.Initializer"></a>

```typescript
import { customerprofilesDomainObjectType } from '@cdktn/provider-awscc'

const customerprofilesDomainObjectTypeFields: customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.contentType">contentType</a></code> | <code>string</code> | The content type of the field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.featureType">featureType</a></code> | <code>string</code> | The feature type of the field. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.source">source</a></code> | <code>string</code> | The source field name. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.target">target</a></code> | <code>string</code> | The target field name. |

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

The content type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#content_type CustomerprofilesDomainObjectType#content_type}

---

##### `featureType`<sup>Optional</sup> <a name="featureType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.featureType"></a>

```typescript
public readonly featureType: string;
```

- *Type:* string

The feature type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#feature_type CustomerprofilesDomainObjectType#feature_type}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The source field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#source CustomerprofilesDomainObjectType#source}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

The target field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#target CustomerprofilesDomainObjectType#target}

---

### CustomerprofilesDomainObjectTypeTags <a name="CustomerprofilesDomainObjectTypeTags" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.Initializer"></a>

```typescript
import { customerprofilesDomainObjectType } from '@cdktn/provider-awscc'

const customerprofilesDomainObjectTypeTags: customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#key CustomerprofilesDomainObjectType#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/customerprofiles_domain_object_type#value CustomerprofilesDomainObjectType#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesDomainObjectTypeFieldsMap <a name="CustomerprofilesDomainObjectTypeFieldsMap" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer"></a>

```typescript
import { customerprofilesDomainObjectType } from '@cdktn/provider-awscc'

new customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.get"></a>

```typescript
public get(key: string): CustomerprofilesDomainObjectTypeFieldsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: CustomerprofilesDomainObjectTypeFields};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>}

---


### CustomerprofilesDomainObjectTypeFieldsOutputReference <a name="CustomerprofilesDomainObjectTypeFieldsOutputReference" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomainObjectType } from '@cdktn/provider-awscc'

new customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetFeatureType">resetFeatureType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetFeatureType` <a name="resetFeatureType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetFeatureType"></a>

```typescript
public resetFeatureType(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureTypeInput">featureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureType">featureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `featureTypeInput`<sup>Optional</sup> <a name="featureTypeInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureTypeInput"></a>

```typescript
public readonly featureTypeInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `featureType`<sup>Required</sup> <a name="featureType" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.featureType"></a>

```typescript
public readonly featureType: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesDomainObjectTypeFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeFields">CustomerprofilesDomainObjectTypeFields</a>

---


### CustomerprofilesDomainObjectTypeTagsList <a name="CustomerprofilesDomainObjectTypeTagsList" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer"></a>

```typescript
import { customerprofilesDomainObjectType } from '@cdktn/provider-awscc'

new customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.get"></a>

```typescript
public get(index: number): CustomerprofilesDomainObjectTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesDomainObjectTypeTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>[]

---


### CustomerprofilesDomainObjectTypeTagsOutputReference <a name="CustomerprofilesDomainObjectTypeTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer"></a>

```typescript
import { customerprofilesDomainObjectType } from '@cdktn/provider-awscc'

new customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CustomerprofilesDomainObjectTypeTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesDomainObjectType.CustomerprofilesDomainObjectTypeTags">CustomerprofilesDomainObjectTypeTags</a>

---




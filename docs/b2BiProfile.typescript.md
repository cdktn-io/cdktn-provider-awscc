# `b2BiProfile` Submodule <a name="`b2BiProfile` Submodule" id="@cdktn/provider-awscc.b2BiProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### B2BiProfile <a name="B2BiProfile" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile awscc_b2bi_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.Initializer"></a>

```typescript
import { b2BiProfile } from '@cdktn/provider-awscc'

new b2BiProfile.B2BiProfile(scope: Construct, id: string, config: B2BiProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig">B2BiProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig">B2BiProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.putTags"></a>

```typescript
public putTags(value: IResolvable | B2BiProfileTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags">B2BiProfileTags</a>[]

---

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a B2BiProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.isConstruct"></a>

```typescript
import { b2BiProfile } from '@cdktn/provider-awscc'

b2BiProfile.B2BiProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.isTerraformElement"></a>

```typescript
import { b2BiProfile } from '@cdktn/provider-awscc'

b2BiProfile.B2BiProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.isTerraformResource"></a>

```typescript
import { b2BiProfile } from '@cdktn/provider-awscc'

b2BiProfile.B2BiProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.generateConfigForImport"></a>

```typescript
import { b2BiProfile } from '@cdktn/provider-awscc'

b2BiProfile.B2BiProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a B2BiProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the B2BiProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing B2BiProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the B2BiProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.profileArn">profileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList">B2BiProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.businessNameInput">businessNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.loggingInput">loggingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.phoneInput">phoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags">B2BiProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.businessName">businessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.logging">logging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.phone">phone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `profileArn`<sup>Required</sup> <a name="profileArn" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.profileArn"></a>

```typescript
public readonly profileArn: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.tags"></a>

```typescript
public readonly tags: B2BiProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList">B2BiProfileTagsList</a>

---

##### `businessNameInput`<sup>Optional</sup> <a name="businessNameInput" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.businessNameInput"></a>

```typescript
public readonly businessNameInput: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.loggingInput"></a>

```typescript
public readonly loggingInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `phoneInput`<sup>Optional</sup> <a name="phoneInput" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.phoneInput"></a>

```typescript
public readonly phoneInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | B2BiProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags">B2BiProfileTags</a>[]

---

##### `businessName`<sup>Required</sup> <a name="businessName" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.businessName"></a>

```typescript
public readonly businessName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.logging"></a>

```typescript
public readonly logging: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### B2BiProfileConfig <a name="B2BiProfileConfig" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.Initializer"></a>

```typescript
import { b2BiProfile } from '@cdktn/provider-awscc'

const b2BiProfileConfig: b2BiProfile.B2BiProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.businessName">businessName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#business_name B2BiProfile#business_name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.logging">logging</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#logging B2BiProfile#logging}. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#name B2BiProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.phone">phone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#phone B2BiProfile#phone}. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#email B2BiProfile#email}. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags">B2BiProfileTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#tags B2BiProfile#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `businessName`<sup>Required</sup> <a name="businessName" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.businessName"></a>

```typescript
public readonly businessName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#business_name B2BiProfile#business_name}.

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.logging"></a>

```typescript
public readonly logging: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#logging B2BiProfile#logging}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#name B2BiProfile#name}.

---

##### `phone`<sup>Required</sup> <a name="phone" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.phone"></a>

```typescript
public readonly phone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#phone B2BiProfile#phone}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#email B2BiProfile#email}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | B2BiProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags">B2BiProfileTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#tags B2BiProfile#tags}.

---

### B2BiProfileTags <a name="B2BiProfileTags" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags.Initializer"></a>

```typescript
import { b2BiProfile } from '@cdktn/provider-awscc'

const b2BiProfileTags: b2BiProfile.B2BiProfileTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#key B2BiProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#value B2BiProfile#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#key B2BiProfile#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_profile#value B2BiProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### B2BiProfileTagsList <a name="B2BiProfileTagsList" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.Initializer"></a>

```typescript
import { b2BiProfile } from '@cdktn/provider-awscc'

new b2BiProfile.B2BiProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.get"></a>

```typescript
public get(index: number): B2BiProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags">B2BiProfileTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags">B2BiProfileTags</a>[]

---


### B2BiProfileTagsOutputReference <a name="B2BiProfileTagsOutputReference" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.Initializer"></a>

```typescript
import { b2BiProfile } from '@cdktn/provider-awscc'

new b2BiProfile.B2BiProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags">B2BiProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.b2BiProfile.B2BiProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | B2BiProfileTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiProfile.B2BiProfileTags">B2BiProfileTags</a>

---




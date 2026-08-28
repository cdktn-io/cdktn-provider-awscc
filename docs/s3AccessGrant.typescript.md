# `s3AccessGrant` Submodule <a name="`s3AccessGrant` Submodule" id="@cdktn/provider-awscc.s3AccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3AccessGrant <a name="S3AccessGrant" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant awscc_s3_access_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer"></a>

```typescript
import { s3AccessGrant } from '@cdktn/provider-awscc'

new s3AccessGrant.S3AccessGrant(scope: Construct, id: string, config: S3AccessGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig">S3AccessGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig">S3AccessGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putAccessGrantsLocationConfiguration">putAccessGrantsLocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putGrantee">putGrantee</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetAccessGrantsLocationConfiguration">resetAccessGrantsLocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetApplicationArn">resetApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetS3PrefixType">resetS3PrefixType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessGrantsLocationConfiguration` <a name="putAccessGrantsLocationConfiguration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putAccessGrantsLocationConfiguration"></a>

```typescript
public putAccessGrantsLocationConfiguration(value: S3AccessGrantAccessGrantsLocationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putAccessGrantsLocationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a>

---

##### `putGrantee` <a name="putGrantee" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putGrantee"></a>

```typescript
public putGrantee(value: S3AccessGrantGrantee): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putGrantee.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putTags"></a>

```typescript
public putTags(value: IResolvable | S3AccessGrantTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]

---

##### `resetAccessGrantsLocationConfiguration` <a name="resetAccessGrantsLocationConfiguration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetAccessGrantsLocationConfiguration"></a>

```typescript
public resetAccessGrantsLocationConfiguration(): void
```

##### `resetApplicationArn` <a name="resetApplicationArn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetApplicationArn"></a>

```typescript
public resetApplicationArn(): void
```

##### `resetS3PrefixType` <a name="resetS3PrefixType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetS3PrefixType"></a>

```typescript
public resetS3PrefixType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3AccessGrant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isConstruct"></a>

```typescript
import { s3AccessGrant } from '@cdktn/provider-awscc'

s3AccessGrant.S3AccessGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformElement"></a>

```typescript
import { s3AccessGrant } from '@cdktn/provider-awscc'

s3AccessGrant.S3AccessGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformResource"></a>

```typescript
import { s3AccessGrant } from '@cdktn/provider-awscc'

s3AccessGrant.S3AccessGrant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport"></a>

```typescript
import { s3AccessGrant } from '@cdktn/provider-awscc'

s3AccessGrant.S3AccessGrant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a S3AccessGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3AccessGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3AccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3AccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantArn">accessGrantArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantId">accessGrantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationConfiguration">accessGrantsLocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference">S3AccessGrantAccessGrantsLocationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.grantee">grantee</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference">S3AccessGrantGranteeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.grantScope">grantScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList">S3AccessGrantTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationConfigurationInput">accessGrantsLocationConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationIdInput">accessGrantsLocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.applicationArnInput">applicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.granteeInput">granteeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.s3PrefixTypeInput">s3PrefixTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationId">accessGrantsLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.s3PrefixType">s3PrefixType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessGrantArn`<sup>Required</sup> <a name="accessGrantArn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantArn"></a>

```typescript
public readonly accessGrantArn: string;
```

- *Type:* string

---

##### `accessGrantId`<sup>Required</sup> <a name="accessGrantId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantId"></a>

```typescript
public readonly accessGrantId: string;
```

- *Type:* string

---

##### `accessGrantsLocationConfiguration`<sup>Required</sup> <a name="accessGrantsLocationConfiguration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationConfiguration"></a>

```typescript
public readonly accessGrantsLocationConfiguration: S3AccessGrantAccessGrantsLocationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference">S3AccessGrantAccessGrantsLocationConfigurationOutputReference</a>

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.grantee"></a>

```typescript
public readonly grantee: S3AccessGrantGranteeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference">S3AccessGrantGranteeOutputReference</a>

---

##### `grantScope`<sup>Required</sup> <a name="grantScope" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.grantScope"></a>

```typescript
public readonly grantScope: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tags"></a>

```typescript
public readonly tags: S3AccessGrantTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList">S3AccessGrantTagsList</a>

---

##### `accessGrantsLocationConfigurationInput`<sup>Optional</sup> <a name="accessGrantsLocationConfigurationInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationConfigurationInput"></a>

```typescript
public readonly accessGrantsLocationConfigurationInput: IResolvable | S3AccessGrantAccessGrantsLocationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a>

---

##### `accessGrantsLocationIdInput`<sup>Optional</sup> <a name="accessGrantsLocationIdInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationIdInput"></a>

```typescript
public readonly accessGrantsLocationIdInput: string;
```

- *Type:* string

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.applicationArnInput"></a>

```typescript
public readonly applicationArnInput: string;
```

- *Type:* string

---

##### `granteeInput`<sup>Optional</sup> <a name="granteeInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.granteeInput"></a>

```typescript
public readonly granteeInput: IResolvable | S3AccessGrantGrantee;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a>

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `s3PrefixTypeInput`<sup>Optional</sup> <a name="s3PrefixTypeInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.s3PrefixTypeInput"></a>

```typescript
public readonly s3PrefixTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | S3AccessGrantTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]

---

##### `accessGrantsLocationId`<sup>Required</sup> <a name="accessGrantsLocationId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.accessGrantsLocationId"></a>

```typescript
public readonly accessGrantsLocationId: string;
```

- *Type:* string

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `s3PrefixType`<sup>Required</sup> <a name="s3PrefixType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.s3PrefixType"></a>

```typescript
public readonly s3PrefixType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3AccessGrantAccessGrantsLocationConfiguration <a name="S3AccessGrantAccessGrantsLocationConfiguration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration.Initializer"></a>

```typescript
import { s3AccessGrant } from '@cdktn/provider-awscc'

const s3AccessGrantAccessGrantsLocationConfiguration: s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix">s3SubPrefix</a></code> | <code>string</code> | The S3 sub prefix of a registered location in your S3 Access Grants instance. |

---

##### `s3SubPrefix`<sup>Optional</sup> <a name="s3SubPrefix" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration.property.s3SubPrefix"></a>

```typescript
public readonly s3SubPrefix: string;
```

- *Type:* string

The S3 sub prefix of a registered location in your S3 Access Grants instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#s3_sub_prefix S3AccessGrant#s3_sub_prefix}

---

### S3AccessGrantConfig <a name="S3AccessGrantConfig" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.Initializer"></a>

```typescript
import { s3AccessGrant } from '@cdktn/provider-awscc'

const s3AccessGrantConfig: s3AccessGrant.S3AccessGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.accessGrantsLocationId">accessGrantsLocationId</a></code> | <code>string</code> | The custom S3 location to be accessed by the grantee. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.grantee">grantee</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a></code> | The principal who will be granted permission to access S3. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.permission">permission</a></code> | <code>string</code> | The level of access to be afforded to the grantee. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.accessGrantsLocationConfiguration">accessGrantsLocationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a></code> | The configuration options of the grant location, which is the S3 path to the data to which you are granting access. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.applicationArn">applicationArn</a></code> | <code>string</code> | The ARN of the application grantees will use to access the location. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.s3PrefixType">s3PrefixType</a></code> | <code>string</code> | The type of S3SubPrefix. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#tags S3AccessGrant#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessGrantsLocationId`<sup>Required</sup> <a name="accessGrantsLocationId" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.accessGrantsLocationId"></a>

```typescript
public readonly accessGrantsLocationId: string;
```

- *Type:* string

The custom S3 location to be accessed by the grantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#access_grants_location_id S3AccessGrant#access_grants_location_id}

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.grantee"></a>

```typescript
public readonly grantee: S3AccessGrantGrantee;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a>

The principal who will be granted permission to access S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#grantee S3AccessGrant#grantee}

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

The level of access to be afforded to the grantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#permission S3AccessGrant#permission}

---

##### `accessGrantsLocationConfiguration`<sup>Optional</sup> <a name="accessGrantsLocationConfiguration" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.accessGrantsLocationConfiguration"></a>

```typescript
public readonly accessGrantsLocationConfiguration: S3AccessGrantAccessGrantsLocationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a>

The configuration options of the grant location, which is the S3 path to the data to which you are granting access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#access_grants_location_configuration S3AccessGrant#access_grants_location_configuration}

---

##### `applicationArn`<sup>Optional</sup> <a name="applicationArn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

The ARN of the application grantees will use to access the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#application_arn S3AccessGrant#application_arn}

---

##### `s3PrefixType`<sup>Optional</sup> <a name="s3PrefixType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.s3PrefixType"></a>

```typescript
public readonly s3PrefixType: string;
```

- *Type:* string

The type of S3SubPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#s3_prefix_type S3AccessGrant#s3_prefix_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | S3AccessGrantTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#tags S3AccessGrant#tags}.

---

### S3AccessGrantGrantee <a name="S3AccessGrantGrantee" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.Initializer"></a>

```typescript
import { s3AccessGrant } from '@cdktn/provider-awscc'

const s3AccessGrantGrantee: s3AccessGrant.S3AccessGrantGrantee = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.property.granteeIdentifier">granteeIdentifier</a></code> | <code>string</code> | The unique identifier of the Grantee. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.property.granteeType">granteeType</a></code> | <code>string</code> | Configures the transfer acceleration state for an Amazon S3 bucket. |

---

##### `granteeIdentifier`<sup>Required</sup> <a name="granteeIdentifier" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.property.granteeIdentifier"></a>

```typescript
public readonly granteeIdentifier: string;
```

- *Type:* string

The unique identifier of the Grantee.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#grantee_identifier S3AccessGrant#grantee_identifier}

---

##### `granteeType`<sup>Required</sup> <a name="granteeType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee.property.granteeType"></a>

```typescript
public readonly granteeType: string;
```

- *Type:* string

Configures the transfer acceleration state for an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#grantee_type S3AccessGrant#grantee_type}

---

### S3AccessGrantTags <a name="S3AccessGrantTags" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.Initializer"></a>

```typescript
import { s3AccessGrant } from '@cdktn/provider-awscc'

const s3AccessGrantTags: s3AccessGrant.S3AccessGrantTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#key S3AccessGrant#key}. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#value S3AccessGrant#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#key S3AccessGrant#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3_access_grant#value S3AccessGrant#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3AccessGrantAccessGrantsLocationConfigurationOutputReference <a name="S3AccessGrantAccessGrantsLocationConfigurationOutputReference" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer"></a>

```typescript
import { s3AccessGrant } from '@cdktn/provider-awscc'

new s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix">resetS3SubPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3SubPrefix` <a name="resetS3SubPrefix" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.resetS3SubPrefix"></a>

```typescript
public resetS3SubPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput">s3SubPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix">s3SubPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3SubPrefixInput`<sup>Optional</sup> <a name="s3SubPrefixInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefixInput"></a>

```typescript
public readonly s3SubPrefixInput: string;
```

- *Type:* string

---

##### `s3SubPrefix`<sup>Required</sup> <a name="s3SubPrefix" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.s3SubPrefix"></a>

```typescript
public readonly s3SubPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3AccessGrantAccessGrantsLocationConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantAccessGrantsLocationConfiguration">S3AccessGrantAccessGrantsLocationConfiguration</a>

---


### S3AccessGrantGranteeOutputReference <a name="S3AccessGrantGranteeOutputReference" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer"></a>

```typescript
import { s3AccessGrant } from '@cdktn/provider-awscc'

new s3AccessGrant.S3AccessGrantGranteeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeIdentifierInput">granteeIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeTypeInput">granteeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeIdentifier">granteeIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeType">granteeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `granteeIdentifierInput`<sup>Optional</sup> <a name="granteeIdentifierInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeIdentifierInput"></a>

```typescript
public readonly granteeIdentifierInput: string;
```

- *Type:* string

---

##### `granteeTypeInput`<sup>Optional</sup> <a name="granteeTypeInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeTypeInput"></a>

```typescript
public readonly granteeTypeInput: string;
```

- *Type:* string

---

##### `granteeIdentifier`<sup>Required</sup> <a name="granteeIdentifier" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeIdentifier"></a>

```typescript
public readonly granteeIdentifier: string;
```

- *Type:* string

---

##### `granteeType`<sup>Required</sup> <a name="granteeType" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.granteeType"></a>

```typescript
public readonly granteeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGranteeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3AccessGrantGrantee;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantGrantee">S3AccessGrantGrantee</a>

---


### S3AccessGrantTagsList <a name="S3AccessGrantTagsList" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer"></a>

```typescript
import { s3AccessGrant } from '@cdktn/provider-awscc'

new s3AccessGrant.S3AccessGrantTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.get"></a>

```typescript
public get(index: number): S3AccessGrantTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3AccessGrantTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>[]

---


### S3AccessGrantTagsOutputReference <a name="S3AccessGrantTagsOutputReference" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer"></a>

```typescript
import { s3AccessGrant } from '@cdktn/provider-awscc'

new s3AccessGrant.S3AccessGrantTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3AccessGrantTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.s3AccessGrant.S3AccessGrantTags">S3AccessGrantTags</a>

---




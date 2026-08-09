# `directoryserviceSimpleAd` Submodule <a name="`directoryserviceSimpleAd` Submodule" id="@cdktn/provider-awscc.directoryserviceSimpleAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryserviceSimpleAd <a name="DirectoryserviceSimpleAd" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad awscc_directoryservice_simple_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer"></a>

```typescript
import { directoryserviceSimpleAd } from '@cdktn/provider-awscc'

new directoryserviceSimpleAd.DirectoryserviceSimpleAd(scope: Construct, id: string, config: DirectoryserviceSimpleAdConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig">DirectoryserviceSimpleAdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig">DirectoryserviceSimpleAdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putVpcSettings">putVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetCreateAlias">resetCreateAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetEnableSso">resetEnableSso</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetShortName">resetShortName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putTags"></a>

```typescript
public putTags(value: IResolvable | DirectoryserviceSimpleAdTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]

---

##### `putVpcSettings` <a name="putVpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putVpcSettings"></a>

```typescript
public putVpcSettings(value: DirectoryserviceSimpleAdVpcSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.putVpcSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

---

##### `resetCreateAlias` <a name="resetCreateAlias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetCreateAlias"></a>

```typescript
public resetCreateAlias(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableSso` <a name="resetEnableSso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetEnableSso"></a>

```typescript
public resetEnableSso(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetShortName` <a name="resetShortName" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetShortName"></a>

```typescript
public resetShortName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryserviceSimpleAd resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isConstruct"></a>

```typescript
import { directoryserviceSimpleAd } from '@cdktn/provider-awscc'

directoryserviceSimpleAd.DirectoryserviceSimpleAd.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformElement"></a>

```typescript
import { directoryserviceSimpleAd } from '@cdktn/provider-awscc'

directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformResource"></a>

```typescript
import { directoryserviceSimpleAd } from '@cdktn/provider-awscc'

directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport"></a>

```typescript
import { directoryserviceSimpleAd } from '@cdktn/provider-awscc'

directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DirectoryserviceSimpleAd resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectoryserviceSimpleAd to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectoryserviceSimpleAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryserviceSimpleAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList">DirectoryserviceSimpleAdTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference">DirectoryserviceSimpleAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAliasInput">createAliasInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSsoInput">enableSsoInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortNameInput">shortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.sizeInput">sizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettingsInput">vpcSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAlias">createAlias</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSso">enableSso</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.size">size</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.dnsIpAddresses"></a>

```typescript
public readonly dnsIpAddresses: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tags"></a>

```typescript
public readonly tags: DirectoryserviceSimpleAdTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList">DirectoryserviceSimpleAdTagsList</a>

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettings"></a>

```typescript
public readonly vpcSettings: DirectoryserviceSimpleAdVpcSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference">DirectoryserviceSimpleAdVpcSettingsOutputReference</a>

---

##### `createAliasInput`<sup>Optional</sup> <a name="createAliasInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAliasInput"></a>

```typescript
public readonly createAliasInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableSsoInput`<sup>Optional</sup> <a name="enableSsoInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSsoInput"></a>

```typescript
public readonly enableSsoInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortNameInput"></a>

```typescript
public readonly shortNameInput: string;
```

- *Type:* string

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.sizeInput"></a>

```typescript
public readonly sizeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DirectoryserviceSimpleAdTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]

---

##### `vpcSettingsInput`<sup>Optional</sup> <a name="vpcSettingsInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.vpcSettingsInput"></a>

```typescript
public readonly vpcSettingsInput: IResolvable | DirectoryserviceSimpleAdVpcSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

---

##### `createAlias`<sup>Required</sup> <a name="createAlias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.createAlias"></a>

```typescript
public readonly createAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableSso`<sup>Required</sup> <a name="enableSso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.enableSso"></a>

```typescript
public readonly enableSso: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAd.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryserviceSimpleAdConfig <a name="DirectoryserviceSimpleAdConfig" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.Initializer"></a>

```typescript
import { directoryserviceSimpleAd } from '@cdktn/provider-awscc'

const directoryserviceSimpleAdConfig: directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.name">name</a></code> | <code>string</code> | The fully qualified domain name for the AWS Managed Simple AD directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.size">size</a></code> | <code>string</code> | The size of the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | VPC settings of the Simple AD directory server in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.createAlias">createAlias</a></code> | <code>boolean \| cdktn.IResolvable</code> | The name of the configuration set. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.description">description</a></code> | <code>string</code> | Description for the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.enableSso">enableSso</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable single sign-on for a Simple Active Directory in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.password">password</a></code> | <code>string</code> | The password for the default administrative user named Admin. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.shortName">shortName</a></code> | <code>string</code> | The NetBIOS name for your domain. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#tags DirectoryserviceSimpleAd#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The fully qualified domain name for the AWS Managed Simple AD directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#name DirectoryserviceSimpleAd#name}

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

The size of the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#size DirectoryserviceSimpleAd#size}

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.vpcSettings"></a>

```typescript
public readonly vpcSettings: DirectoryserviceSimpleAdVpcSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

VPC settings of the Simple AD directory server in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#vpc_settings DirectoryserviceSimpleAd#vpc_settings}

---

##### `createAlias`<sup>Optional</sup> <a name="createAlias" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.createAlias"></a>

```typescript
public readonly createAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The name of the configuration set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#create_alias DirectoryserviceSimpleAd#create_alias}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#description DirectoryserviceSimpleAd#description}

---

##### `enableSso`<sup>Optional</sup> <a name="enableSso" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.enableSso"></a>

```typescript
public readonly enableSso: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable single sign-on for a Simple Active Directory in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#enable_sso DirectoryserviceSimpleAd#enable_sso}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password for the default administrative user named Admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#password DirectoryserviceSimpleAd#password}

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

The NetBIOS name for your domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#short_name DirectoryserviceSimpleAd#short_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DirectoryserviceSimpleAdTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#tags DirectoryserviceSimpleAd#tags}.

---

### DirectoryserviceSimpleAdTags <a name="DirectoryserviceSimpleAdTags" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.Initializer"></a>

```typescript
import { directoryserviceSimpleAd } from '@cdktn/provider-awscc'

const directoryserviceSimpleAdTags: directoryserviceSimpleAd.DirectoryserviceSimpleAdTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#key DirectoryserviceSimpleAd#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#value DirectoryserviceSimpleAd#value}

---

### DirectoryserviceSimpleAdVpcSettings <a name="DirectoryserviceSimpleAdVpcSettings" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.Initializer"></a>

```typescript
import { directoryserviceSimpleAd } from '@cdktn/provider-awscc'

const directoryserviceSimpleAdVpcSettings: directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The identifiers of the subnets for the directory servers. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.vpcId">vpcId</a></code> | <code>string</code> | The identifier of the VPC in which to create the directory. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The identifiers of the subnets for the directory servers.

The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#subnet_ids DirectoryserviceSimpleAd#subnet_ids}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The identifier of the VPC in which to create the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directoryservice_simple_ad#vpc_id DirectoryserviceSimpleAd#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryserviceSimpleAdTagsList <a name="DirectoryserviceSimpleAdTagsList" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer"></a>

```typescript
import { directoryserviceSimpleAd } from '@cdktn/provider-awscc'

new directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.get"></a>

```typescript
public get(index: number): DirectoryserviceSimpleAdTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectoryserviceSimpleAdTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>[]

---


### DirectoryserviceSimpleAdTagsOutputReference <a name="DirectoryserviceSimpleAdTagsOutputReference" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer"></a>

```typescript
import { directoryserviceSimpleAd } from '@cdktn/provider-awscc'

new directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectoryserviceSimpleAdTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdTags">DirectoryserviceSimpleAdTags</a>

---


### DirectoryserviceSimpleAdVpcSettingsOutputReference <a name="DirectoryserviceSimpleAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer"></a>

```typescript
import { directoryserviceSimpleAd } from '@cdktn/provider-awscc'

new directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectoryserviceSimpleAdVpcSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceSimpleAd.DirectoryserviceSimpleAdVpcSettings">DirectoryserviceSimpleAdVpcSettings</a>

---




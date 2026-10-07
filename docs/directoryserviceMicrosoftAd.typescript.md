# `directoryserviceMicrosoftAd` Submodule <a name="`directoryserviceMicrosoftAd` Submodule" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryserviceMicrosoftAd <a name="DirectoryserviceMicrosoftAd" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad awscc_directoryservice_microsoft_ad}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer"></a>

```typescript
import { directoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

new directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd(scope: Construct, id: string, config: DirectoryserviceMicrosoftAdConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig">DirectoryserviceMicrosoftAdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig">DirectoryserviceMicrosoftAdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings">putVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetCreateAlias">resetCreateAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEnableSso">resetEnableSso</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetShortName">resetShortName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVpcSettings` <a name="putVpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings"></a>

```typescript
public putVpcSettings(value: DirectoryserviceMicrosoftAdVpcSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.putVpcSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

---

##### `resetCreateAlias` <a name="resetCreateAlias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetCreateAlias"></a>

```typescript
public resetCreateAlias(): void
```

##### `resetEdition` <a name="resetEdition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEdition"></a>

```typescript
public resetEdition(): void
```

##### `resetEnableSso` <a name="resetEnableSso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetEnableSso"></a>

```typescript
public resetEnableSso(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetShortName` <a name="resetShortName" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.resetShortName"></a>

```typescript
public resetShortName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct"></a>

```typescript
import { directoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement"></a>

```typescript
import { directoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource"></a>

```typescript
import { directoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport"></a>

```typescript
import { directoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DirectoryserviceMicrosoftAd resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectoryserviceMicrosoftAd to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectoryserviceMicrosoftAd that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryserviceMicrosoftAd to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference">DirectoryserviceMicrosoftAdVpcSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAliasInput">createAliasInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.editionInput">editionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSsoInput">enableSsoInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortNameInput">shortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettingsInput">vpcSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAlias">createAlias</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSso">enableSso</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.dnsIpAddresses"></a>

```typescript
public readonly dnsIpAddresses: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettings"></a>

```typescript
public readonly vpcSettings: DirectoryserviceMicrosoftAdVpcSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference">DirectoryserviceMicrosoftAdVpcSettingsOutputReference</a>

---

##### `createAliasInput`<sup>Optional</sup> <a name="createAliasInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAliasInput"></a>

```typescript
public readonly createAliasInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.editionInput"></a>

```typescript
public readonly editionInput: string;
```

- *Type:* string

---

##### `enableSsoInput`<sup>Optional</sup> <a name="enableSsoInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSsoInput"></a>

```typescript
public readonly enableSsoInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortNameInput"></a>

```typescript
public readonly shortNameInput: string;
```

- *Type:* string

---

##### `vpcSettingsInput`<sup>Optional</sup> <a name="vpcSettingsInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.vpcSettingsInput"></a>

```typescript
public readonly vpcSettingsInput: IResolvable | DirectoryserviceMicrosoftAdVpcSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

---

##### `createAlias`<sup>Required</sup> <a name="createAlias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.createAlias"></a>

```typescript
public readonly createAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `enableSso`<sup>Required</sup> <a name="enableSso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.enableSso"></a>

```typescript
public readonly enableSso: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAd.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryserviceMicrosoftAdConfig <a name="DirectoryserviceMicrosoftAdConfig" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.Initializer"></a>

```typescript
import { directoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

const directoryserviceMicrosoftAdConfig: directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.name">name</a></code> | <code>string</code> | The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.vpcSettings">vpcSettings</a></code> | <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | Specifies the VPC settings of the Microsoft AD directory server in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.createAlias">createAlias</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies an alias for a directory and assigns the alias to the directory. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.edition">edition</a></code> | <code>string</code> | AWS Managed Microsoft AD is available in two editions: Standard and Enterprise. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.enableSso">enableSso</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable single sign-on for a Microsoft Active Directory in AWS. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.password">password</a></code> | <code>string</code> | The password for the default administrative user named Admin. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.shortName">shortName</a></code> | <code>string</code> | The NetBIOS name for your domain, such as CORP. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#name DirectoryserviceMicrosoftAd#name}

---

##### `vpcSettings`<sup>Required</sup> <a name="vpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.vpcSettings"></a>

```typescript
public readonly vpcSettings: DirectoryserviceMicrosoftAdVpcSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

Specifies the VPC settings of the Microsoft AD directory server in AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_settings DirectoryserviceMicrosoftAd#vpc_settings}

---

##### `createAlias`<sup>Optional</sup> <a name="createAlias" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.createAlias"></a>

```typescript
public readonly createAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies an alias for a directory and assigns the alias to the directory.

The alias is used to construct the access URL for the directory, such as http://<alias>.awsapps.com. By default, AWS CloudFormation does not create an alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#create_alias DirectoryserviceMicrosoftAd#create_alias}

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

AWS Managed Microsoft AD is available in two editions: Standard and Enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#edition DirectoryserviceMicrosoftAd#edition}

---

##### `enableSso`<sup>Optional</sup> <a name="enableSso" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.enableSso"></a>

```typescript
public readonly enableSso: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable single sign-on for a Microsoft Active Directory in AWS.

Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately. If you don't specify a value, AWS CloudFormation disables single sign-on by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#enable_sso DirectoryserviceMicrosoftAd#enable_sso}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password for the default administrative user named Admin.

If you need to change the password for the administrator account, see the ResetUserPassword API call in the AWS Directory Service API Reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#password DirectoryserviceMicrosoftAd#password}

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdConfig.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

The NetBIOS name for your domain, such as CORP.

If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, CORP for the directory DNS corp.example.com. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#short_name DirectoryserviceMicrosoftAd#short_name}

---

### DirectoryserviceMicrosoftAdVpcSettings <a name="DirectoryserviceMicrosoftAdVpcSettings" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.Initializer"></a>

```typescript
import { directoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

const directoryserviceMicrosoftAdVpcSettings: directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The identifiers of the subnets for the directory servers. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.vpcId">vpcId</a></code> | <code>string</code> | The identifier of the VPC in which to create the directory. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The identifiers of the subnets for the directory servers.

The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#subnet_ids DirectoryserviceMicrosoftAd#subnet_ids}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The identifier of the VPC in which to create the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/directoryservice_microsoft_ad#vpc_id DirectoryserviceMicrosoftAd#vpc_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryserviceMicrosoftAdVpcSettingsOutputReference <a name="DirectoryserviceMicrosoftAdVpcSettingsOutputReference" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer"></a>

```typescript
import { directoryserviceMicrosoftAd } from '@cdktn/provider-awscc'

new directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectoryserviceMicrosoftAdVpcSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directoryserviceMicrosoftAd.DirectoryserviceMicrosoftAdVpcSettings">DirectoryserviceMicrosoftAdVpcSettings</a>

---




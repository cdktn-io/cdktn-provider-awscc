# `iamSamlProvider` Submodule <a name="`iamSamlProvider` Submodule" id="@cdktn/provider-awscc.iamSamlProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamSamlProvider <a name="IamSamlProvider" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider awscc_iam_saml_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer"></a>

```typescript
import { iamSamlProvider } from '@cdktn/provider-awscc'

new iamSamlProvider.IamSamlProvider(scope: Construct, id: string, config?: IamSamlProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig">IamSamlProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig">IamSamlProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.putPrivateKeyList">putPrivateKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetAddPrivateKey">resetAddPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetAssertionEncryptionMode">resetAssertionEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetPrivateKeyList">resetPrivateKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetRemovePrivateKey">resetRemovePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetSamlMetadataDocument">resetSamlMetadataDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrivateKeyList` <a name="putPrivateKeyList" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.putPrivateKeyList"></a>

```typescript
public putPrivateKeyList(value: IResolvable | IamSamlProviderPrivateKeyListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.putPrivateKeyList.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.putTags"></a>

```typescript
public putTags(value: IResolvable | IamSamlProviderTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]

---

##### `resetAddPrivateKey` <a name="resetAddPrivateKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetAddPrivateKey"></a>

```typescript
public resetAddPrivateKey(): void
```

##### `resetAssertionEncryptionMode` <a name="resetAssertionEncryptionMode" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetAssertionEncryptionMode"></a>

```typescript
public resetAssertionEncryptionMode(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPrivateKeyList` <a name="resetPrivateKeyList" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetPrivateKeyList"></a>

```typescript
public resetPrivateKeyList(): void
```

##### `resetRemovePrivateKey` <a name="resetRemovePrivateKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetRemovePrivateKey"></a>

```typescript
public resetRemovePrivateKey(): void
```

##### `resetSamlMetadataDocument` <a name="resetSamlMetadataDocument" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetSamlMetadataDocument"></a>

```typescript
public resetSamlMetadataDocument(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IamSamlProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isConstruct"></a>

```typescript
import { iamSamlProvider } from '@cdktn/provider-awscc'

iamSamlProvider.IamSamlProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isTerraformElement"></a>

```typescript
import { iamSamlProvider } from '@cdktn/provider-awscc'

iamSamlProvider.IamSamlProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isTerraformResource"></a>

```typescript
import { iamSamlProvider } from '@cdktn/provider-awscc'

iamSamlProvider.IamSamlProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.generateConfigForImport"></a>

```typescript
import { iamSamlProvider } from '@cdktn/provider-awscc'

iamSamlProvider.IamSamlProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IamSamlProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamSamlProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamSamlProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamSamlProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.privateKeyList">privateKeyList</a></code> | <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList">IamSamlProviderPrivateKeyListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.samlProviderUuid">samlProviderUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList">IamSamlProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.addPrivateKeyInput">addPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.assertionEncryptionModeInput">assertionEncryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.privateKeyListInput">privateKeyListInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.removePrivateKeyInput">removePrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.samlMetadataDocumentInput">samlMetadataDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.addPrivateKey">addPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.assertionEncryptionMode">assertionEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.removePrivateKey">removePrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.samlMetadataDocument">samlMetadataDocument</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateKeyList`<sup>Required</sup> <a name="privateKeyList" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.privateKeyList"></a>

```typescript
public readonly privateKeyList: IamSamlProviderPrivateKeyListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList">IamSamlProviderPrivateKeyListStructList</a>

---

##### `samlProviderUuid`<sup>Required</sup> <a name="samlProviderUuid" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.samlProviderUuid"></a>

```typescript
public readonly samlProviderUuid: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.tags"></a>

```typescript
public readonly tags: IamSamlProviderTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList">IamSamlProviderTagsList</a>

---

##### `addPrivateKeyInput`<sup>Optional</sup> <a name="addPrivateKeyInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.addPrivateKeyInput"></a>

```typescript
public readonly addPrivateKeyInput: string;
```

- *Type:* string

---

##### `assertionEncryptionModeInput`<sup>Optional</sup> <a name="assertionEncryptionModeInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.assertionEncryptionModeInput"></a>

```typescript
public readonly assertionEncryptionModeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `privateKeyListInput`<sup>Optional</sup> <a name="privateKeyListInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.privateKeyListInput"></a>

```typescript
public readonly privateKeyListInput: IResolvable | IamSamlProviderPrivateKeyListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]

---

##### `removePrivateKeyInput`<sup>Optional</sup> <a name="removePrivateKeyInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.removePrivateKeyInput"></a>

```typescript
public readonly removePrivateKeyInput: string;
```

- *Type:* string

---

##### `samlMetadataDocumentInput`<sup>Optional</sup> <a name="samlMetadataDocumentInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.samlMetadataDocumentInput"></a>

```typescript
public readonly samlMetadataDocumentInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IamSamlProviderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]

---

##### `addPrivateKey`<sup>Required</sup> <a name="addPrivateKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.addPrivateKey"></a>

```typescript
public readonly addPrivateKey: string;
```

- *Type:* string

---

##### `assertionEncryptionMode`<sup>Required</sup> <a name="assertionEncryptionMode" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.assertionEncryptionMode"></a>

```typescript
public readonly assertionEncryptionMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `removePrivateKey`<sup>Required</sup> <a name="removePrivateKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.removePrivateKey"></a>

```typescript
public readonly removePrivateKey: string;
```

- *Type:* string

---

##### `samlMetadataDocument`<sup>Required</sup> <a name="samlMetadataDocument" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.samlMetadataDocument"></a>

```typescript
public readonly samlMetadataDocument: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamSamlProviderConfig <a name="IamSamlProviderConfig" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.Initializer"></a>

```typescript
import { iamSamlProvider } from '@cdktn/provider-awscc'

const iamSamlProviderConfig: iamSamlProvider.IamSamlProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.addPrivateKey">addPrivateKey</a></code> | <code>string</code> | The private key from your external identity provider. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.assertionEncryptionMode">assertionEncryptionMode</a></code> | <code>string</code> | The encryption setting for the SAML provider. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#name IamSamlProvider#name}. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.privateKeyList">privateKeyList</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#private_key_list IamSamlProvider#private_key_list}. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.removePrivateKey">removePrivateKey</a></code> | <code>string</code> | The Key ID of the private key to remove. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.samlMetadataDocument">samlMetadataDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#saml_metadata_document IamSamlProvider#saml_metadata_document}. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#tags IamSamlProvider#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `addPrivateKey`<sup>Optional</sup> <a name="addPrivateKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.addPrivateKey"></a>

```typescript
public readonly addPrivateKey: string;
```

- *Type:* string

The private key from your external identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#add_private_key IamSamlProvider#add_private_key}

---

##### `assertionEncryptionMode`<sup>Optional</sup> <a name="assertionEncryptionMode" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.assertionEncryptionMode"></a>

```typescript
public readonly assertionEncryptionMode: string;
```

- *Type:* string

The encryption setting for the SAML provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#assertion_encryption_mode IamSamlProvider#assertion_encryption_mode}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#name IamSamlProvider#name}.

---

##### `privateKeyList`<sup>Optional</sup> <a name="privateKeyList" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.privateKeyList"></a>

```typescript
public readonly privateKeyList: IResolvable | IamSamlProviderPrivateKeyListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#private_key_list IamSamlProvider#private_key_list}.

---

##### `removePrivateKey`<sup>Optional</sup> <a name="removePrivateKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.removePrivateKey"></a>

```typescript
public readonly removePrivateKey: string;
```

- *Type:* string

The Key ID of the private key to remove.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#remove_private_key IamSamlProvider#remove_private_key}

---

##### `samlMetadataDocument`<sup>Optional</sup> <a name="samlMetadataDocument" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.samlMetadataDocument"></a>

```typescript
public readonly samlMetadataDocument: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#saml_metadata_document IamSamlProvider#saml_metadata_document}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IamSamlProviderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#tags IamSamlProvider#tags}.

---

### IamSamlProviderPrivateKeyListStruct <a name="IamSamlProviderPrivateKeyListStruct" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct.Initializer"></a>

```typescript
import { iamSamlProvider } from '@cdktn/provider-awscc'

const iamSamlProviderPrivateKeyListStruct: iamSamlProvider.IamSamlProviderPrivateKeyListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct.property.keyId">keyId</a></code> | <code>string</code> | The unique identifier for the SAML private key. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct.property.timestamp">timestamp</a></code> | <code>string</code> | The date and time, in <a href=\"http://www.iso.org/iso/iso8601\">ISO 8601 date-time </a> format, when the private key was uploaded. |

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The unique identifier for the SAML private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#key_id IamSamlProvider#key_id}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

The date and time, in <a href=\"http://www.iso.org/iso/iso8601\">ISO 8601 date-time </a> format, when the private key was uploaded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#timestamp IamSamlProvider#timestamp}

---

### IamSamlProviderTags <a name="IamSamlProviderTags" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags.Initializer"></a>

```typescript
import { iamSamlProvider } from '@cdktn/provider-awscc'

const iamSamlProviderTags: iamSamlProvider.IamSamlProviderTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#key IamSamlProvider#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iam_saml_provider#value IamSamlProvider#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IamSamlProviderPrivateKeyListStructList <a name="IamSamlProviderPrivateKeyListStructList" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer"></a>

```typescript
import { iamSamlProvider } from '@cdktn/provider-awscc'

new iamSamlProvider.IamSamlProviderPrivateKeyListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.get"></a>

```typescript
public get(index: number): IamSamlProviderPrivateKeyListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamSamlProviderPrivateKeyListStruct[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>[]

---


### IamSamlProviderPrivateKeyListStructOutputReference <a name="IamSamlProviderPrivateKeyListStructOutputReference" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer"></a>

```typescript
import { iamSamlProvider } from '@cdktn/provider-awscc'

new iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetTimestamp` <a name="resetTimestamp" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.resetTimestamp"></a>

```typescript
public resetTimestamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.timestampInput">timestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.timestampInput"></a>

```typescript
public readonly timestampInput: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamSamlProviderPrivateKeyListStruct;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderPrivateKeyListStruct">IamSamlProviderPrivateKeyListStruct</a>

---


### IamSamlProviderTagsList <a name="IamSamlProviderTagsList" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer"></a>

```typescript
import { iamSamlProvider } from '@cdktn/provider-awscc'

new iamSamlProvider.IamSamlProviderTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.get"></a>

```typescript
public get(index: number): IamSamlProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamSamlProviderTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>[]

---


### IamSamlProviderTagsOutputReference <a name="IamSamlProviderTagsOutputReference" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer"></a>

```typescript
import { iamSamlProvider } from '@cdktn/provider-awscc'

new iamSamlProvider.IamSamlProviderTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IamSamlProviderTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iamSamlProvider.IamSamlProviderTags">IamSamlProviderTags</a>

---




# `emrStudio` Submodule <a name="`emrStudio` Submodule" id="@cdktn/provider-awscc.emrStudio"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrStudio <a name="EmrStudio" id="@cdktn/provider-awscc.emrStudio.EmrStudio"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio awscc_emr_studio}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer"></a>

```typescript
import { emrStudio } from '@cdktn/provider-awscc'

new emrStudio.EmrStudio(scope: Construct, id: string, config: EmrStudioConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig">EmrStudioConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.emrStudio.EmrStudio.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig">EmrStudioConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetEncryptionKeyArn">resetEncryptionKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcInstanceArn">resetIdcInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcUserAssignment">resetIdcUserAssignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpAuthUrl">resetIdpAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpRelayStateParameterName">resetIdpRelayStateParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetTrustedIdentityPropagationEnabled">resetTrustedIdentityPropagationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.resetUserRole">resetUserRole</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.emrStudio.EmrStudio.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.emrStudio.EmrStudio.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.emrStudio.EmrStudio.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrStudio.EmrStudio.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.emrStudio.EmrStudio.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudio.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.putTags"></a>

```typescript
public putTags(value: IResolvable | EmrStudioTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStudio.EmrStudio.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionKeyArn` <a name="resetEncryptionKeyArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetEncryptionKeyArn"></a>

```typescript
public resetEncryptionKeyArn(): void
```

##### `resetIdcInstanceArn` <a name="resetIdcInstanceArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcInstanceArn"></a>

```typescript
public resetIdcInstanceArn(): void
```

##### `resetIdcUserAssignment` <a name="resetIdcUserAssignment" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdcUserAssignment"></a>

```typescript
public resetIdcUserAssignment(): void
```

##### `resetIdpAuthUrl` <a name="resetIdpAuthUrl" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpAuthUrl"></a>

```typescript
public resetIdpAuthUrl(): void
```

##### `resetIdpRelayStateParameterName` <a name="resetIdpRelayStateParameterName" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetIdpRelayStateParameterName"></a>

```typescript
public resetIdpRelayStateParameterName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTrustedIdentityPropagationEnabled` <a name="resetTrustedIdentityPropagationEnabled" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetTrustedIdentityPropagationEnabled"></a>

```typescript
public resetTrustedIdentityPropagationEnabled(): void
```

##### `resetUserRole` <a name="resetUserRole" id="@cdktn/provider-awscc.emrStudio.EmrStudio.resetUserRole"></a>

```typescript
public resetUserRole(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EmrStudio resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isConstruct"></a>

```typescript
import { emrStudio } from '@cdktn/provider-awscc'

emrStudio.EmrStudio.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformElement"></a>

```typescript
import { emrStudio } from '@cdktn/provider-awscc'

emrStudio.EmrStudio.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformResource"></a>

```typescript
import { emrStudio } from '@cdktn/provider-awscc'

emrStudio.EmrStudio.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.emrStudio.EmrStudio.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport"></a>

```typescript
import { emrStudio } from '@cdktn/provider-awscc'

emrStudio.EmrStudio.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a EmrStudio resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmrStudio to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmrStudio that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the EmrStudio to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.studioId">studioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList">EmrStudioTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.authModeInput">authModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3LocationInput">defaultS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArnInput">encryptionKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupIdInput">engineSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArnInput">idcInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignmentInput">idcUserAssignmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrlInput">idpAuthUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterNameInput">idpRelayStateParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRoleInput">serviceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabledInput">trustedIdentityPropagationEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRoleInput">userRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupIdInput">workspaceSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.authMode">authMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3Location">defaultS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupId">engineSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArn">idcInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignment">idcUserAssignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrl">idpAuthUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterName">idpRelayStateParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRole">serviceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabled">trustedIdentityPropagationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRole">userRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupId">workspaceSecurityGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.studioId"></a>

```typescript
public readonly studioId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.tags"></a>

```typescript
public readonly tags: EmrStudioTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList">EmrStudioTagsList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `authModeInput`<sup>Optional</sup> <a name="authModeInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.authModeInput"></a>

```typescript
public readonly authModeInput: string;
```

- *Type:* string

---

##### `defaultS3LocationInput`<sup>Optional</sup> <a name="defaultS3LocationInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3LocationInput"></a>

```typescript
public readonly defaultS3LocationInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encryptionKeyArnInput`<sup>Optional</sup> <a name="encryptionKeyArnInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArnInput"></a>

```typescript
public readonly encryptionKeyArnInput: string;
```

- *Type:* string

---

##### `engineSecurityGroupIdInput`<sup>Optional</sup> <a name="engineSecurityGroupIdInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupIdInput"></a>

```typescript
public readonly engineSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `idcInstanceArnInput`<sup>Optional</sup> <a name="idcInstanceArnInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArnInput"></a>

```typescript
public readonly idcInstanceArnInput: string;
```

- *Type:* string

---

##### `idcUserAssignmentInput`<sup>Optional</sup> <a name="idcUserAssignmentInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignmentInput"></a>

```typescript
public readonly idcUserAssignmentInput: string;
```

- *Type:* string

---

##### `idpAuthUrlInput`<sup>Optional</sup> <a name="idpAuthUrlInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrlInput"></a>

```typescript
public readonly idpAuthUrlInput: string;
```

- *Type:* string

---

##### `idpRelayStateParameterNameInput`<sup>Optional</sup> <a name="idpRelayStateParameterNameInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterNameInput"></a>

```typescript
public readonly idpRelayStateParameterNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceRoleInput`<sup>Optional</sup> <a name="serviceRoleInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRoleInput"></a>

```typescript
public readonly serviceRoleInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | EmrStudioTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]

---

##### `trustedIdentityPropagationEnabledInput`<sup>Optional</sup> <a name="trustedIdentityPropagationEnabledInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabledInput"></a>

```typescript
public readonly trustedIdentityPropagationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userRoleInput`<sup>Optional</sup> <a name="userRoleInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRoleInput"></a>

```typescript
public readonly userRoleInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `workspaceSecurityGroupIdInput`<sup>Optional</sup> <a name="workspaceSecurityGroupIdInput" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupIdInput"></a>

```typescript
public readonly workspaceSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `authMode`<sup>Required</sup> <a name="authMode" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.authMode"></a>

```typescript
public readonly authMode: string;
```

- *Type:* string

---

##### `defaultS3Location`<sup>Required</sup> <a name="defaultS3Location" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.defaultS3Location"></a>

```typescript
public readonly defaultS3Location: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encryptionKeyArn`<sup>Required</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.encryptionKeyArn"></a>

```typescript
public readonly encryptionKeyArn: string;
```

- *Type:* string

---

##### `engineSecurityGroupId`<sup>Required</sup> <a name="engineSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.engineSecurityGroupId"></a>

```typescript
public readonly engineSecurityGroupId: string;
```

- *Type:* string

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcInstanceArn"></a>

```typescript
public readonly idcInstanceArn: string;
```

- *Type:* string

---

##### `idcUserAssignment`<sup>Required</sup> <a name="idcUserAssignment" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idcUserAssignment"></a>

```typescript
public readonly idcUserAssignment: string;
```

- *Type:* string

---

##### `idpAuthUrl`<sup>Required</sup> <a name="idpAuthUrl" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpAuthUrl"></a>

```typescript
public readonly idpAuthUrl: string;
```

- *Type:* string

---

##### `idpRelayStateParameterName`<sup>Required</sup> <a name="idpRelayStateParameterName" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.idpRelayStateParameterName"></a>

```typescript
public readonly idpRelayStateParameterName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `trustedIdentityPropagationEnabled`<sup>Required</sup> <a name="trustedIdentityPropagationEnabled" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.trustedIdentityPropagationEnabled"></a>

```typescript
public readonly trustedIdentityPropagationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userRole`<sup>Required</sup> <a name="userRole" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.userRole"></a>

```typescript
public readonly userRole: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `workspaceSecurityGroupId`<sup>Required</sup> <a name="workspaceSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.workspaceSecurityGroupId"></a>

```typescript
public readonly workspaceSecurityGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudio.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.emrStudio.EmrStudio.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrStudioConfig <a name="EmrStudioConfig" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.Initializer"></a>

```typescript
import { emrStudio } from '@cdktn/provider-awscc'

const emrStudioConfig: emrStudio.EmrStudioConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.authMode">authMode</a></code> | <code>string</code> | Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.defaultS3Location">defaultS3Location</a></code> | <code>string</code> | The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.engineSecurityGroupId">engineSecurityGroupId</a></code> | <code>string</code> | The ID of the Amazon EMR Studio Engine security group. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.name">name</a></code> | <code>string</code> | A descriptive name for the Amazon EMR Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.serviceRole">serviceRole</a></code> | <code>string</code> | The IAM role that will be assumed by the Amazon EMR Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | A list of up to 5 subnet IDs to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.vpcId">vpcId</a></code> | <code>string</code> | The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.workspaceSecurityGroupId">workspaceSecurityGroupId</a></code> | <code>string</code> | The ID of the Amazon EMR Studio Workspace security group. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.description">description</a></code> | <code>string</code> | A detailed description of the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.encryptionKeyArn">encryptionKeyArn</a></code> | <code>string</code> | The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcInstanceArn">idcInstanceArn</a></code> | <code>string</code> | The ARN of the IAM Identity Center instance to create the Studio application. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcUserAssignment">idcUserAssignment</a></code> | <code>string</code> | Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpAuthUrl">idpAuthUrl</a></code> | <code>string</code> | Your identity provider's authentication endpoint. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpRelayStateParameterName">idpRelayStateParameterName</a></code> | <code>string</code> | The name of relay state parameter for external Identity Provider. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]</code> | A list of tags to associate with the Studio. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.trustedIdentityPropagationEnabled">trustedIdentityPropagationEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.userRole">userRole</a></code> | <code>string</code> | The IAM user role that will be assumed by users and groups logged in to a Studio. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authMode`<sup>Required</sup> <a name="authMode" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.authMode"></a>

```typescript
public readonly authMode: string;
```

- *Type:* string

Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM.

Amazon EMR Studio currently only supports SSO authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#auth_mode EmrStudio#auth_mode}

---

##### `defaultS3Location`<sup>Required</sup> <a name="defaultS3Location" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.defaultS3Location"></a>

```typescript
public readonly defaultS3Location: string;
```

- *Type:* string

The default Amazon S3 location to back up EMR Studio Workspaces and notebook files.

A Studio user can select an alternative Amazon S3 location when creating a Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#default_s3_location EmrStudio#default_s3_location}

---

##### `engineSecurityGroupId`<sup>Required</sup> <a name="engineSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.engineSecurityGroupId"></a>

```typescript
public readonly engineSecurityGroupId: string;
```

- *Type:* string

The ID of the Amazon EMR Studio Engine security group.

The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#engine_security_group_id EmrStudio#engine_security_group_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A descriptive name for the Amazon EMR Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#name EmrStudio#name}

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

The IAM role that will be assumed by the Amazon EMR Studio.

The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#service_role EmrStudio#service_role}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

A list of up to 5 subnet IDs to associate with the Studio.

The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#subnet_ids EmrStudio#subnet_ids}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#vpc_id EmrStudio#vpc_id}

---

##### `workspaceSecurityGroupId`<sup>Required</sup> <a name="workspaceSecurityGroupId" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.workspaceSecurityGroupId"></a>

```typescript
public readonly workspaceSecurityGroupId: string;
```

- *Type:* string

The ID of the Amazon EMR Studio Workspace security group.

The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#workspace_security_group_id EmrStudio#workspace_security_group_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A detailed description of the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#description EmrStudio#description}

---

##### `encryptionKeyArn`<sup>Optional</sup> <a name="encryptionKeyArn" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.encryptionKeyArn"></a>

```typescript
public readonly encryptionKeyArn: string;
```

- *Type:* string

The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#encryption_key_arn EmrStudio#encryption_key_arn}

---

##### `idcInstanceArn`<sup>Optional</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcInstanceArn"></a>

```typescript
public readonly idcInstanceArn: string;
```

- *Type:* string

The ARN of the IAM Identity Center instance to create the Studio application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#idc_instance_arn EmrStudio#idc_instance_arn}

---

##### `idcUserAssignment`<sup>Optional</sup> <a name="idcUserAssignment" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idcUserAssignment"></a>

```typescript
public readonly idcUserAssignment: string;
```

- *Type:* string

Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL.

If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#idc_user_assignment EmrStudio#idc_user_assignment}

---

##### `idpAuthUrl`<sup>Optional</sup> <a name="idpAuthUrl" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpAuthUrl"></a>

```typescript
public readonly idpAuthUrl: string;
```

- *Type:* string

Your identity provider's authentication endpoint.

Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#idp_auth_url EmrStudio#idp_auth_url}

---

##### `idpRelayStateParameterName`<sup>Optional</sup> <a name="idpRelayStateParameterName" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.idpRelayStateParameterName"></a>

```typescript
public readonly idpRelayStateParameterName: string;
```

- *Type:* string

The name of relay state parameter for external Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#idp_relay_state_parameter_name EmrStudio#idp_relay_state_parameter_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | EmrStudioTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]

A list of tags to associate with the Studio.

Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#tags EmrStudio#tags}

---

##### `trustedIdentityPropagationEnabled`<sup>Optional</sup> <a name="trustedIdentityPropagationEnabled" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.trustedIdentityPropagationEnabled"></a>

```typescript
public readonly trustedIdentityPropagationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#trusted_identity_propagation_enabled EmrStudio#trusted_identity_propagation_enabled}

---

##### `userRole`<sup>Optional</sup> <a name="userRole" id="@cdktn/provider-awscc.emrStudio.EmrStudioConfig.property.userRole"></a>

```typescript
public readonly userRole: string;
```

- *Type:* string

The IAM user role that will be assumed by users and groups logged in to a Studio.

The permissions attached to this IAM role can be scoped down for each user or group using session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#user_role EmrStudio#user_role}

---

### EmrStudioTags <a name="EmrStudioTags" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags.Initializer"></a>

```typescript
import { emrStudio } from '@cdktn/provider-awscc'

const emrStudioTags: emrStudio.EmrStudioTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#key EmrStudio#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.emrStudio.EmrStudioTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/emr_studio#value EmrStudio#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EmrStudioTagsList <a name="EmrStudioTagsList" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer"></a>

```typescript
import { emrStudio } from '@cdktn/provider-awscc'

new emrStudio.EmrStudioTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.get"></a>

```typescript
public get(index: number): EmrStudioTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrStudioTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>[]

---


### EmrStudioTagsOutputReference <a name="EmrStudioTagsOutputReference" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer"></a>

```typescript
import { emrStudio } from '@cdktn/provider-awscc'

new emrStudio.EmrStudioTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.emrStudio.EmrStudioTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EmrStudioTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.emrStudio.EmrStudioTags">EmrStudioTags</a>

---




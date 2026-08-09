# `amplifyDomain` Submodule <a name="`amplifyDomain` Submodule" id="@cdktn/provider-awscc.amplifyDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyDomain <a name="AmplifyDomain" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain awscc_amplify_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer"></a>

```typescript
import { amplifyDomain } from '@cdktn/provider-awscc'

new amplifyDomain.AmplifyDomain(scope: Construct, id: string, config: AmplifyDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig">AmplifyDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig">AmplifyDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.putCertificateSettings">putCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.putSubDomainSettings">putSubDomainSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetAutoSubDomainCreationPatterns">resetAutoSubDomainCreationPatterns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetAutoSubDomainIamRole">resetAutoSubDomainIamRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetCertificateSettings">resetCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetEnableAutoSubDomain">resetEnableAutoSubDomain</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCertificateSettings` <a name="putCertificateSettings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.putCertificateSettings"></a>

```typescript
public putCertificateSettings(value: AmplifyDomainCertificateSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.putCertificateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a>

---

##### `putSubDomainSettings` <a name="putSubDomainSettings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.putSubDomainSettings"></a>

```typescript
public putSubDomainSettings(value: IResolvable | AmplifyDomainSubDomainSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.putSubDomainSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>[]

---

##### `resetAutoSubDomainCreationPatterns` <a name="resetAutoSubDomainCreationPatterns" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetAutoSubDomainCreationPatterns"></a>

```typescript
public resetAutoSubDomainCreationPatterns(): void
```

##### `resetAutoSubDomainIamRole` <a name="resetAutoSubDomainIamRole" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetAutoSubDomainIamRole"></a>

```typescript
public resetAutoSubDomainIamRole(): void
```

##### `resetCertificateSettings` <a name="resetCertificateSettings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetCertificateSettings"></a>

```typescript
public resetCertificateSettings(): void
```

##### `resetEnableAutoSubDomain` <a name="resetEnableAutoSubDomain" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.resetEnableAutoSubDomain"></a>

```typescript
public resetEnableAutoSubDomain(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AmplifyDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isConstruct"></a>

```typescript
import { amplifyDomain } from '@cdktn/provider-awscc'

amplifyDomain.AmplifyDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isTerraformElement"></a>

```typescript
import { amplifyDomain } from '@cdktn/provider-awscc'

amplifyDomain.AmplifyDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isTerraformResource"></a>

```typescript
import { amplifyDomain } from '@cdktn/provider-awscc'

amplifyDomain.AmplifyDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.generateConfigForImport"></a>

```typescript
import { amplifyDomain } from '@cdktn/provider-awscc'

amplifyDomain.AmplifyDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AmplifyDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AmplifyDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AmplifyDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AmplifyDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificate">certificate</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference">AmplifyDomainCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificateRecord">certificateRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificateSettings">certificateSettings</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference">AmplifyDomainCertificateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.domainStatus">domainStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.subDomainSettings">subDomainSettings</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList">AmplifyDomainSubDomainSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.updateStatus">updateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainCreationPatternsInput">autoSubDomainCreationPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainIamRoleInput">autoSubDomainIamRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificateSettingsInput">certificateSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.enableAutoSubDomainInput">enableAutoSubDomainInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.subDomainSettingsInput">subDomainSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainCreationPatterns">autoSubDomainCreationPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainIamRole">autoSubDomainIamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.enableAutoSubDomain">enableAutoSubDomain</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificate"></a>

```typescript
public readonly certificate: AmplifyDomainCertificateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference">AmplifyDomainCertificateOutputReference</a>

---

##### `certificateRecord`<sup>Required</sup> <a name="certificateRecord" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificateRecord"></a>

```typescript
public readonly certificateRecord: string;
```

- *Type:* string

---

##### `certificateSettings`<sup>Required</sup> <a name="certificateSettings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificateSettings"></a>

```typescript
public readonly certificateSettings: AmplifyDomainCertificateSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference">AmplifyDomainCertificateSettingsOutputReference</a>

---

##### `domainStatus`<sup>Required</sup> <a name="domainStatus" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.domainStatus"></a>

```typescript
public readonly domainStatus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `subDomainSettings`<sup>Required</sup> <a name="subDomainSettings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.subDomainSettings"></a>

```typescript
public readonly subDomainSettings: AmplifyDomainSubDomainSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList">AmplifyDomainSubDomainSettingsList</a>

---

##### `updateStatus`<sup>Required</sup> <a name="updateStatus" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.updateStatus"></a>

```typescript
public readonly updateStatus: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `autoSubDomainCreationPatternsInput`<sup>Optional</sup> <a name="autoSubDomainCreationPatternsInput" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainCreationPatternsInput"></a>

```typescript
public readonly autoSubDomainCreationPatternsInput: string[];
```

- *Type:* string[]

---

##### `autoSubDomainIamRoleInput`<sup>Optional</sup> <a name="autoSubDomainIamRoleInput" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainIamRoleInput"></a>

```typescript
public readonly autoSubDomainIamRoleInput: string;
```

- *Type:* string

---

##### `certificateSettingsInput`<sup>Optional</sup> <a name="certificateSettingsInput" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.certificateSettingsInput"></a>

```typescript
public readonly certificateSettingsInput: IResolvable | AmplifyDomainCertificateSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `enableAutoSubDomainInput`<sup>Optional</sup> <a name="enableAutoSubDomainInput" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.enableAutoSubDomainInput"></a>

```typescript
public readonly enableAutoSubDomainInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `subDomainSettingsInput`<sup>Optional</sup> <a name="subDomainSettingsInput" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.subDomainSettingsInput"></a>

```typescript
public readonly subDomainSettingsInput: IResolvable | AmplifyDomainSubDomainSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `autoSubDomainCreationPatterns`<sup>Required</sup> <a name="autoSubDomainCreationPatterns" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainCreationPatterns"></a>

```typescript
public readonly autoSubDomainCreationPatterns: string[];
```

- *Type:* string[]

---

##### `autoSubDomainIamRole`<sup>Required</sup> <a name="autoSubDomainIamRole" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.autoSubDomainIamRole"></a>

```typescript
public readonly autoSubDomainIamRole: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `enableAutoSubDomain`<sup>Required</sup> <a name="enableAutoSubDomain" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.enableAutoSubDomain"></a>

```typescript
public readonly enableAutoSubDomain: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyDomainCertificate <a name="AmplifyDomainCertificate" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificate.Initializer"></a>

```typescript
import { amplifyDomain } from '@cdktn/provider-awscc'

const amplifyDomainCertificate: amplifyDomain.AmplifyDomainCertificate = { ... }
```


### AmplifyDomainCertificateSettings <a name="AmplifyDomainCertificateSettings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings.Initializer"></a>

```typescript
import { amplifyDomain } from '@cdktn/provider-awscc'

const amplifyDomainCertificateSettings: amplifyDomain.AmplifyDomainCertificateSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings.property.certificateType">certificateType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#certificate_type AmplifyDomain#certificate_type}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings.property.customCertificateArn">customCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#custom_certificate_arn AmplifyDomain#custom_certificate_arn}. |

---

##### `certificateType`<sup>Optional</sup> <a name="certificateType" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings.property.certificateType"></a>

```typescript
public readonly certificateType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#certificate_type AmplifyDomain#certificate_type}.

---

##### `customCertificateArn`<sup>Optional</sup> <a name="customCertificateArn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings.property.customCertificateArn"></a>

```typescript
public readonly customCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#custom_certificate_arn AmplifyDomain#custom_certificate_arn}.

---

### AmplifyDomainConfig <a name="AmplifyDomainConfig" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.Initializer"></a>

```typescript
import { amplifyDomain } from '@cdktn/provider-awscc'

const amplifyDomainConfig: amplifyDomain.AmplifyDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#app_id AmplifyDomain#app_id}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#domain_name AmplifyDomain#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.subDomainSettings">subDomainSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#sub_domain_settings AmplifyDomain#sub_domain_settings}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.autoSubDomainCreationPatterns">autoSubDomainCreationPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#auto_sub_domain_creation_patterns AmplifyDomain#auto_sub_domain_creation_patterns}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.autoSubDomainIamRole">autoSubDomainIamRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#auto_sub_domain_iam_role AmplifyDomain#auto_sub_domain_iam_role}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.certificateSettings">certificateSettings</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#certificate_settings AmplifyDomain#certificate_settings}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.enableAutoSubDomain">enableAutoSubDomain</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#enable_auto_sub_domain AmplifyDomain#enable_auto_sub_domain}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#app_id AmplifyDomain#app_id}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#domain_name AmplifyDomain#domain_name}.

---

##### `subDomainSettings`<sup>Required</sup> <a name="subDomainSettings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.subDomainSettings"></a>

```typescript
public readonly subDomainSettings: IResolvable | AmplifyDomainSubDomainSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#sub_domain_settings AmplifyDomain#sub_domain_settings}.

---

##### `autoSubDomainCreationPatterns`<sup>Optional</sup> <a name="autoSubDomainCreationPatterns" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.autoSubDomainCreationPatterns"></a>

```typescript
public readonly autoSubDomainCreationPatterns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#auto_sub_domain_creation_patterns AmplifyDomain#auto_sub_domain_creation_patterns}.

---

##### `autoSubDomainIamRole`<sup>Optional</sup> <a name="autoSubDomainIamRole" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.autoSubDomainIamRole"></a>

```typescript
public readonly autoSubDomainIamRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#auto_sub_domain_iam_role AmplifyDomain#auto_sub_domain_iam_role}.

---

##### `certificateSettings`<sup>Optional</sup> <a name="certificateSettings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.certificateSettings"></a>

```typescript
public readonly certificateSettings: AmplifyDomainCertificateSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#certificate_settings AmplifyDomain#certificate_settings}.

---

##### `enableAutoSubDomain`<sup>Optional</sup> <a name="enableAutoSubDomain" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainConfig.property.enableAutoSubDomain"></a>

```typescript
public readonly enableAutoSubDomain: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#enable_auto_sub_domain AmplifyDomain#enable_auto_sub_domain}.

---

### AmplifyDomainSubDomainSettings <a name="AmplifyDomainSubDomainSettings" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings.Initializer"></a>

```typescript
import { amplifyDomain } from '@cdktn/provider-awscc'

const amplifyDomainSubDomainSettings: amplifyDomain.AmplifyDomainSubDomainSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings.property.branchName">branchName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#branch_name AmplifyDomain#branch_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#prefix AmplifyDomain#prefix}. |

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#branch_name AmplifyDomain#branch_name}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/amplify_domain#prefix AmplifyDomain#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifyDomainCertificateOutputReference <a name="AmplifyDomainCertificateOutputReference" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.Initializer"></a>

```typescript
import { amplifyDomain } from '@cdktn/provider-awscc'

new amplifyDomain.AmplifyDomainCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.certificateType">certificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.certificateVerificationDnsRecord">certificateVerificationDnsRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificate">AmplifyDomainCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.certificateType"></a>

```typescript
public readonly certificateType: string;
```

- *Type:* string

---

##### `certificateVerificationDnsRecord`<sup>Required</sup> <a name="certificateVerificationDnsRecord" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.certificateVerificationDnsRecord"></a>

```typescript
public readonly certificateVerificationDnsRecord: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AmplifyDomainCertificate;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificate">AmplifyDomainCertificate</a>

---


### AmplifyDomainCertificateSettingsOutputReference <a name="AmplifyDomainCertificateSettingsOutputReference" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.Initializer"></a>

```typescript
import { amplifyDomain } from '@cdktn/provider-awscc'

new amplifyDomain.AmplifyDomainCertificateSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resetCertificateType">resetCertificateType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resetCustomCertificateArn">resetCustomCertificateArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateType` <a name="resetCertificateType" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resetCertificateType"></a>

```typescript
public resetCertificateType(): void
```

##### `resetCustomCertificateArn` <a name="resetCustomCertificateArn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.resetCustomCertificateArn"></a>

```typescript
public resetCustomCertificateArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.certificateTypeInput">certificateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.customCertificateArnInput">customCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.certificateType">certificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.customCertificateArn">customCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateTypeInput`<sup>Optional</sup> <a name="certificateTypeInput" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.certificateTypeInput"></a>

```typescript
public readonly certificateTypeInput: string;
```

- *Type:* string

---

##### `customCertificateArnInput`<sup>Optional</sup> <a name="customCertificateArnInput" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.customCertificateArnInput"></a>

```typescript
public readonly customCertificateArnInput: string;
```

- *Type:* string

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.certificateType"></a>

```typescript
public readonly certificateType: string;
```

- *Type:* string

---

##### `customCertificateArn`<sup>Required</sup> <a name="customCertificateArn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.customCertificateArn"></a>

```typescript
public readonly customCertificateArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyDomainCertificateSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainCertificateSettings">AmplifyDomainCertificateSettings</a>

---


### AmplifyDomainSubDomainSettingsList <a name="AmplifyDomainSubDomainSettingsList" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer"></a>

```typescript
import { amplifyDomain } from '@cdktn/provider-awscc'

new amplifyDomain.AmplifyDomainSubDomainSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.get"></a>

```typescript
public get(index: number): AmplifyDomainSubDomainSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyDomainSubDomainSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>[]

---


### AmplifyDomainSubDomainSettingsOutputReference <a name="AmplifyDomainSubDomainSettingsOutputReference" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer"></a>

```typescript
import { amplifyDomain } from '@cdktn/provider-awscc'

new amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.branchNameInput">branchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.branchNameInput"></a>

```typescript
public readonly branchNameInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyDomainSubDomainSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyDomain.AmplifyDomainSubDomainSettings">AmplifyDomainSubDomainSettings</a>

---




# `ssoApplication` Submodule <a name="`ssoApplication` Submodule" id="@cdktn/provider-awscc.ssoApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoApplication <a name="SsoApplication" id="@cdktn/provider-awscc.ssoApplication.SsoApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application awscc_sso_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.Initializer"></a>

```typescript
import { ssoApplication } from '@cdktn/provider-awscc'

new ssoApplication.SsoApplication(scope: Construct, id: string, config: SsoApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig">SsoApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig">SsoApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.putPortalOptions">putPortalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.resetPortalOptions">resetPortalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPortalOptions` <a name="putPortalOptions" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.putPortalOptions"></a>

```typescript
public putPortalOptions(value: SsoApplicationPortalOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.putPortalOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptions">SsoApplicationPortalOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.putTags"></a>

```typescript
public putTags(value: IResolvable | SsoApplicationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTags">SsoApplicationTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPortalOptions` <a name="resetPortalOptions" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.resetPortalOptions"></a>

```typescript
public resetPortalOptions(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsoApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.isConstruct"></a>

```typescript
import { ssoApplication } from '@cdktn/provider-awscc'

ssoApplication.SsoApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.isTerraformElement"></a>

```typescript
import { ssoApplication } from '@cdktn/provider-awscc'

ssoApplication.SsoApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.isTerraformResource"></a>

```typescript
import { ssoApplication } from '@cdktn/provider-awscc'

ssoApplication.SsoApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.generateConfigForImport"></a>

```typescript
import { ssoApplication } from '@cdktn/provider-awscc'

ssoApplication.SsoApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SsoApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsoApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsoApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsoApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.identityStoreArn">identityStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.portalOptions">portalOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference">SsoApplicationPortalOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList">SsoApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.applicationProviderArnInput">applicationProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.portalOptionsInput">portalOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptions">SsoApplicationPortalOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTags">SsoApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.applicationProviderArn">applicationProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityStoreArn`<sup>Required</sup> <a name="identityStoreArn" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.identityStoreArn"></a>

```typescript
public readonly identityStoreArn: string;
```

- *Type:* string

---

##### `portalOptions`<sup>Required</sup> <a name="portalOptions" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.portalOptions"></a>

```typescript
public readonly portalOptions: SsoApplicationPortalOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference">SsoApplicationPortalOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.tags"></a>

```typescript
public readonly tags: SsoApplicationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList">SsoApplicationTagsList</a>

---

##### `applicationProviderArnInput`<sup>Optional</sup> <a name="applicationProviderArnInput" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.applicationProviderArnInput"></a>

```typescript
public readonly applicationProviderArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portalOptionsInput`<sup>Optional</sup> <a name="portalOptionsInput" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.portalOptionsInput"></a>

```typescript
public readonly portalOptionsInput: IResolvable | SsoApplicationPortalOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptions">SsoApplicationPortalOptions</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | SsoApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTags">SsoApplicationTags</a>[]

---

##### `applicationProviderArn`<sup>Required</sup> <a name="applicationProviderArn" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.applicationProviderArn"></a>

```typescript
public readonly applicationProviderArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssoApplication.SsoApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoApplicationConfig <a name="SsoApplicationConfig" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.Initializer"></a>

```typescript
import { ssoApplication } from '@cdktn/provider-awscc'

const ssoApplicationConfig: ssoApplication.SsoApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.applicationProviderArn">applicationProviderArn</a></code> | <code>string</code> | The ARN of the application provider under which the operation will run. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The ARN of the instance of IAM Identity Center under which the operation will run. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.name">name</a></code> | <code>string</code> | The name you want to assign to this Identity Center (SSO) Application. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.description">description</a></code> | <code>string</code> | The description information for the Identity Center (SSO) Application. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.portalOptions">portalOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptions">SsoApplicationPortalOptions</a></code> | A structure that describes the options for the portal associated with an application. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.status">status</a></code> | <code>string</code> | Specifies whether the application is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTags">SsoApplicationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#tags SsoApplication#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationProviderArn`<sup>Required</sup> <a name="applicationProviderArn" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.applicationProviderArn"></a>

```typescript
public readonly applicationProviderArn: string;
```

- *Type:* string

The ARN of the application provider under which the operation will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#application_provider_arn SsoApplication#application_provider_arn}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The ARN of the instance of IAM Identity Center under which the operation will run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#instance_arn SsoApplication#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name you want to assign to this Identity Center (SSO) Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#name SsoApplication#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description information for the Identity Center (SSO) Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#description SsoApplication#description}

---

##### `portalOptions`<sup>Optional</sup> <a name="portalOptions" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.portalOptions"></a>

```typescript
public readonly portalOptions: SsoApplicationPortalOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptions">SsoApplicationPortalOptions</a>

A structure that describes the options for the portal associated with an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#portal_options SsoApplication#portal_options}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Specifies whether the application is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#status SsoApplication#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | SsoApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTags">SsoApplicationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#tags SsoApplication#tags}.

---

### SsoApplicationPortalOptions <a name="SsoApplicationPortalOptions" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptions.Initializer"></a>

```typescript
import { ssoApplication } from '@cdktn/provider-awscc'

const ssoApplicationPortalOptions: ssoApplication.SsoApplicationPortalOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptions.property.signInOptions">signInOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptions">SsoApplicationPortalOptionsSignInOptions</a></code> | A structure that describes the sign-in options for the access portal. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptions.property.visibility">visibility</a></code> | <code>string</code> | Indicates whether this application is visible in the access portal. |

---

##### `signInOptions`<sup>Optional</sup> <a name="signInOptions" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptions.property.signInOptions"></a>

```typescript
public readonly signInOptions: SsoApplicationPortalOptionsSignInOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptions">SsoApplicationPortalOptionsSignInOptions</a>

A structure that describes the sign-in options for the access portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#sign_in_options SsoApplication#sign_in_options}

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptions.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Indicates whether this application is visible in the access portal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#visibility SsoApplication#visibility}

---

### SsoApplicationPortalOptionsSignInOptions <a name="SsoApplicationPortalOptionsSignInOptions" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptions.Initializer"></a>

```typescript
import { ssoApplication } from '@cdktn/provider-awscc'

const ssoApplicationPortalOptionsSignInOptions: ssoApplication.SsoApplicationPortalOptionsSignInOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptions.property.applicationUrl">applicationUrl</a></code> | <code>string</code> | The URL that accepts authentication requests for an application, this is a required parameter if the Origin parameter is APPLICATION. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptions.property.origin">origin</a></code> | <code>string</code> | This determines how IAM Identity Center navigates the user to the target application. |

---

##### `applicationUrl`<sup>Optional</sup> <a name="applicationUrl" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptions.property.applicationUrl"></a>

```typescript
public readonly applicationUrl: string;
```

- *Type:* string

The URL that accepts authentication requests for an application, this is a required parameter if the Origin parameter is APPLICATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#application_url SsoApplication#application_url}

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptions.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

This determines how IAM Identity Center navigates the user to the target application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#origin SsoApplication#origin}

---

### SsoApplicationTags <a name="SsoApplicationTags" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTags.Initializer"></a>

```typescript
import { ssoApplication } from '@cdktn/provider-awscc'

const ssoApplicationTags: ssoApplication.SsoApplicationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#key SsoApplication#key}. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#value SsoApplication#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#key SsoApplication#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sso_application#value SsoApplication#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoApplicationPortalOptionsOutputReference <a name="SsoApplicationPortalOptionsOutputReference" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.Initializer"></a>

```typescript
import { ssoApplication } from '@cdktn/provider-awscc'

new ssoApplication.SsoApplicationPortalOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.putSignInOptions">putSignInOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.resetSignInOptions">resetSignInOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSignInOptions` <a name="putSignInOptions" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.putSignInOptions"></a>

```typescript
public putSignInOptions(value: SsoApplicationPortalOptionsSignInOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.putSignInOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptions">SsoApplicationPortalOptionsSignInOptions</a>

---

##### `resetSignInOptions` <a name="resetSignInOptions" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.resetSignInOptions"></a>

```typescript
public resetSignInOptions(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.resetVisibility"></a>

```typescript
public resetVisibility(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.signInOptions">signInOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference">SsoApplicationPortalOptionsSignInOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.signInOptionsInput">signInOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptions">SsoApplicationPortalOptionsSignInOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptions">SsoApplicationPortalOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `signInOptions`<sup>Required</sup> <a name="signInOptions" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.signInOptions"></a>

```typescript
public readonly signInOptions: SsoApplicationPortalOptionsSignInOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference">SsoApplicationPortalOptionsSignInOptionsOutputReference</a>

---

##### `signInOptionsInput`<sup>Optional</sup> <a name="signInOptionsInput" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.signInOptionsInput"></a>

```typescript
public readonly signInOptionsInput: IResolvable | SsoApplicationPortalOptionsSignInOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptions">SsoApplicationPortalOptionsSignInOptions</a>

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoApplicationPortalOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptions">SsoApplicationPortalOptions</a>

---


### SsoApplicationPortalOptionsSignInOptionsOutputReference <a name="SsoApplicationPortalOptionsSignInOptionsOutputReference" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.Initializer"></a>

```typescript
import { ssoApplication } from '@cdktn/provider-awscc'

new ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.resetApplicationUrl">resetApplicationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.resetOrigin">resetOrigin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationUrl` <a name="resetApplicationUrl" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.resetApplicationUrl"></a>

```typescript
public resetApplicationUrl(): void
```

##### `resetOrigin` <a name="resetOrigin" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.resetOrigin"></a>

```typescript
public resetOrigin(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.applicationUrlInput">applicationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.originInput">originInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.applicationUrl">applicationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptions">SsoApplicationPortalOptionsSignInOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationUrlInput`<sup>Optional</sup> <a name="applicationUrlInput" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.applicationUrlInput"></a>

```typescript
public readonly applicationUrlInput: string;
```

- *Type:* string

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.originInput"></a>

```typescript
public readonly originInput: string;
```

- *Type:* string

---

##### `applicationUrl`<sup>Required</sup> <a name="applicationUrl" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.applicationUrl"></a>

```typescript
public readonly applicationUrl: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoApplicationPortalOptionsSignInOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationPortalOptionsSignInOptions">SsoApplicationPortalOptionsSignInOptions</a>

---


### SsoApplicationTagsList <a name="SsoApplicationTagsList" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.Initializer"></a>

```typescript
import { ssoApplication } from '@cdktn/provider-awscc'

new ssoApplication.SsoApplicationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.get"></a>

```typescript
public get(index: number): SsoApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTags">SsoApplicationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTags">SsoApplicationTags</a>[]

---


### SsoApplicationTagsOutputReference <a name="SsoApplicationTagsOutputReference" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.Initializer"></a>

```typescript
import { ssoApplication } from '@cdktn/provider-awscc'

new ssoApplication.SsoApplicationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTags">SsoApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ssoApplication.SsoApplicationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoApplicationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ssoApplication.SsoApplicationTags">SsoApplicationTags</a>

---




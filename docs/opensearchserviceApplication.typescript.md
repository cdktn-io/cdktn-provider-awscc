# `opensearchserviceApplication` Submodule <a name="`opensearchserviceApplication` Submodule" id="@cdktn/provider-awscc.opensearchserviceApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserviceApplication <a name="OpensearchserviceApplication" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application awscc_opensearchservice_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

new opensearchserviceApplication.OpensearchserviceApplication(scope: Construct, id: string, config: OpensearchserviceApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig">OpensearchserviceApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig">OpensearchserviceApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putAppConfigs">putAppConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putDataSources">putDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putIamIdentityCenterOptions">putIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetAppConfigs">resetAppConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetIamIdentityCenterOptions">resetIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppConfigs` <a name="putAppConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putAppConfigs"></a>

```typescript
public putAppConfigs(value: IResolvable | OpensearchserviceApplicationAppConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putAppConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>[]

---

##### `putDataSources` <a name="putDataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putDataSources"></a>

```typescript
public putDataSources(value: IResolvable | OpensearchserviceApplicationDataSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putDataSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>[]

---

##### `putIamIdentityCenterOptions` <a name="putIamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putIamIdentityCenterOptions"></a>

```typescript
public putIamIdentityCenterOptions(value: OpensearchserviceApplicationIamIdentityCenterOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putIamIdentityCenterOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putTags"></a>

```typescript
public putTags(value: IResolvable | OpensearchserviceApplicationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>[]

---

##### `resetAppConfigs` <a name="resetAppConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetAppConfigs"></a>

```typescript
public resetAppConfigs(): void
```

##### `resetDataSources` <a name="resetDataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetDataSources"></a>

```typescript
public resetDataSources(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetIamIdentityCenterOptions` <a name="resetIamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetIamIdentityCenterOptions"></a>

```typescript
public resetIamIdentityCenterOptions(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserviceApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isConstruct"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

opensearchserviceApplication.OpensearchserviceApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformElement"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

opensearchserviceApplication.OpensearchserviceApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformResource"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

opensearchserviceApplication.OpensearchserviceApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a OpensearchserviceApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchserviceApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchserviceApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserviceApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.appConfigs">appConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList">OpensearchserviceApplicationAppConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dataSources">dataSources</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList">OpensearchserviceApplicationDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.iamIdentityCenterOptions">iamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference">OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList">OpensearchserviceApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.appConfigsInput">appConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dataSourcesInput">dataSourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.iamIdentityCenterOptionsInput">iamIdentityCenterOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appConfigs`<sup>Required</sup> <a name="appConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.appConfigs"></a>

```typescript
public readonly appConfigs: OpensearchserviceApplicationAppConfigsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList">OpensearchserviceApplicationAppConfigsList</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dataSources"></a>

```typescript
public readonly dataSources: OpensearchserviceApplicationDataSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList">OpensearchserviceApplicationDataSourcesList</a>

---

##### `iamIdentityCenterOptions`<sup>Required</sup> <a name="iamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.iamIdentityCenterOptions"></a>

```typescript
public readonly iamIdentityCenterOptions: OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference">OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tags"></a>

```typescript
public readonly tags: OpensearchserviceApplicationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList">OpensearchserviceApplicationTagsList</a>

---

##### `appConfigsInput`<sup>Optional</sup> <a name="appConfigsInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.appConfigsInput"></a>

```typescript
public readonly appConfigsInput: IResolvable | OpensearchserviceApplicationAppConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>[]

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.dataSourcesInput"></a>

```typescript
public readonly dataSourcesInput: IResolvable | OpensearchserviceApplicationDataSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>[]

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `iamIdentityCenterOptionsInput`<sup>Optional</sup> <a name="iamIdentityCenterOptionsInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.iamIdentityCenterOptionsInput"></a>

```typescript
public readonly iamIdentityCenterOptionsInput: IResolvable | OpensearchserviceApplicationIamIdentityCenterOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | OpensearchserviceApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>[]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserviceApplicationAppConfigs <a name="OpensearchserviceApplicationAppConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.Initializer"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

const opensearchserviceApplicationAppConfigs: opensearchserviceApplication.OpensearchserviceApplicationAppConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.property.key">key</a></code> | <code>string</code> | The configuration key. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.property.value">value</a></code> | <code>string</code> | The configuration value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The configuration key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#key OpensearchserviceApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The configuration value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#value OpensearchserviceApplication#value}

---

### OpensearchserviceApplicationConfig <a name="OpensearchserviceApplicationConfig" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.Initializer"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

const opensearchserviceApplicationConfig: opensearchserviceApplication.OpensearchserviceApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.name">name</a></code> | <code>string</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.appConfigs">appConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>[]</code> | List of application configurations. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.dataSources">dataSources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>[]</code> | List of data sources. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.endpoint">endpoint</a></code> | <code>string</code> | The endpoint for the application. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.iamIdentityCenterOptions">iamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a></code> | Options for configuring IAM Identity Center. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The ARN of the KMS key used to encrypt the application. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>[]</code> | An arbitrary set of tags (key-value pairs) for this application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#name OpensearchserviceApplication#name}

---

##### `appConfigs`<sup>Optional</sup> <a name="appConfigs" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.appConfigs"></a>

```typescript
public readonly appConfigs: IResolvable | OpensearchserviceApplicationAppConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>[]

List of application configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#app_configs OpensearchserviceApplication#app_configs}

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.dataSources"></a>

```typescript
public readonly dataSources: IResolvable | OpensearchserviceApplicationDataSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>[]

List of data sources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#data_sources OpensearchserviceApplication#data_sources}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The endpoint for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#endpoint OpensearchserviceApplication#endpoint}

---

##### `iamIdentityCenterOptions`<sup>Optional</sup> <a name="iamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.iamIdentityCenterOptions"></a>

```typescript
public readonly iamIdentityCenterOptions: OpensearchserviceApplicationIamIdentityCenterOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a>

Options for configuring IAM Identity Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#iam_identity_center_options OpensearchserviceApplication#iam_identity_center_options}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The ARN of the KMS key used to encrypt the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#kms_key_arn OpensearchserviceApplication#kms_key_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | OpensearchserviceApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>[]

An arbitrary set of tags (key-value pairs) for this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#tags OpensearchserviceApplication#tags}

---

### OpensearchserviceApplicationDataSources <a name="OpensearchserviceApplicationDataSources" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.Initializer"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

const opensearchserviceApplicationDataSources: opensearchserviceApplication.OpensearchserviceApplicationDataSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | The ARN of the data source. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.property.dataSourceDescription">dataSourceDescription</a></code> | <code>string</code> | Description of the data source. |

---

##### `dataSourceArn`<sup>Optional</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

The ARN of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#data_source_arn OpensearchserviceApplication#data_source_arn}

---

##### `dataSourceDescription`<sup>Optional</sup> <a name="dataSourceDescription" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources.property.dataSourceDescription"></a>

```typescript
public readonly dataSourceDescription: string;
```

- *Type:* string

Description of the data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#data_source_description OpensearchserviceApplication#data_source_description}

---

### OpensearchserviceApplicationIamIdentityCenterOptions <a name="OpensearchserviceApplicationIamIdentityCenterOptions" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.Initializer"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

const opensearchserviceApplicationIamIdentityCenterOptions: opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether IAM Identity Center is enabled. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.iamIdentityCenterInstanceArn">iamIdentityCenterInstanceArn</a></code> | <code>string</code> | The ARN of the IAM Identity Center instance. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.iamRoleForIdentityCenterApplicationArn">iamRoleForIdentityCenterApplicationArn</a></code> | <code>string</code> | The ARN of the IAM role for Identity Center application. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether IAM Identity Center is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#enabled OpensearchserviceApplication#enabled}

---

##### `iamIdentityCenterInstanceArn`<sup>Optional</sup> <a name="iamIdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.iamIdentityCenterInstanceArn"></a>

```typescript
public readonly iamIdentityCenterInstanceArn: string;
```

- *Type:* string

The ARN of the IAM Identity Center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#iam_identity_center_instance_arn OpensearchserviceApplication#iam_identity_center_instance_arn}

---

##### `iamRoleForIdentityCenterApplicationArn`<sup>Optional</sup> <a name="iamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions.property.iamRoleForIdentityCenterApplicationArn"></a>

```typescript
public readonly iamRoleForIdentityCenterApplicationArn: string;
```

- *Type:* string

The ARN of the IAM role for Identity Center application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#iam_role_for_identity_center_application_arn OpensearchserviceApplication#iam_role_for_identity_center_application_arn}

---

### OpensearchserviceApplicationTags <a name="OpensearchserviceApplicationTags" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.Initializer"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

const opensearchserviceApplicationTags: opensearchserviceApplication.OpensearchserviceApplicationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.property.key">key</a></code> | <code>string</code> | The key in the key-value pair. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.property.value">value</a></code> | <code>string</code> | The value in the key-value pair. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#key OpensearchserviceApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value in the key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/opensearchservice_application#value OpensearchserviceApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserviceApplicationAppConfigsList <a name="OpensearchserviceApplicationAppConfigsList" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

new opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.get"></a>

```typescript
public get(index: number): OpensearchserviceApplicationAppConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchserviceApplicationAppConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>[]

---


### OpensearchserviceApplicationAppConfigsOutputReference <a name="OpensearchserviceApplicationAppConfigsOutputReference" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

new opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchserviceApplicationAppConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationAppConfigs">OpensearchserviceApplicationAppConfigs</a>

---


### OpensearchserviceApplicationDataSourcesList <a name="OpensearchserviceApplicationDataSourcesList" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

new opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.get"></a>

```typescript
public get(index: number): OpensearchserviceApplicationDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchserviceApplicationDataSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>[]

---


### OpensearchserviceApplicationDataSourcesOutputReference <a name="OpensearchserviceApplicationDataSourcesOutputReference" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

new opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resetDataSourceArn">resetDataSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resetDataSourceDescription">resetDataSourceDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSourceArn` <a name="resetDataSourceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resetDataSourceArn"></a>

```typescript
public resetDataSourceArn(): void
```

##### `resetDataSourceDescription` <a name="resetDataSourceDescription" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.resetDataSourceDescription"></a>

```typescript
public resetDataSourceDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArnInput">dataSourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescriptionInput">dataSourceDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescription">dataSourceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSourceArnInput`<sup>Optional</sup> <a name="dataSourceArnInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArnInput"></a>

```typescript
public readonly dataSourceArnInput: string;
```

- *Type:* string

---

##### `dataSourceDescriptionInput`<sup>Optional</sup> <a name="dataSourceDescriptionInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescriptionInput"></a>

```typescript
public readonly dataSourceDescriptionInput: string;
```

- *Type:* string

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

---

##### `dataSourceDescription`<sup>Required</sup> <a name="dataSourceDescription" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.dataSourceDescription"></a>

```typescript
public readonly dataSourceDescription: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchserviceApplicationDataSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationDataSources">OpensearchserviceApplicationDataSources</a>

---


### OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference <a name="OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

new opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetIamIdentityCenterInstanceArn">resetIamIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetIamRoleForIdentityCenterApplicationArn">resetIamRoleForIdentityCenterApplicationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetIamIdentityCenterInstanceArn` <a name="resetIamIdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetIamIdentityCenterInstanceArn"></a>

```typescript
public resetIamIdentityCenterInstanceArn(): void
```

##### `resetIamRoleForIdentityCenterApplicationArn` <a name="resetIamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.resetIamRoleForIdentityCenterApplicationArn"></a>

```typescript
public resetIamRoleForIdentityCenterApplicationArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArnInput">iamIdentityCenterInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArnInput">iamRoleForIdentityCenterApplicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn">iamIdentityCenterInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn">iamRoleForIdentityCenterApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iamIdentityCenterInstanceArnInput`<sup>Optional</sup> <a name="iamIdentityCenterInstanceArnInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArnInput"></a>

```typescript
public readonly iamIdentityCenterInstanceArnInput: string;
```

- *Type:* string

---

##### `iamRoleForIdentityCenterApplicationArnInput`<sup>Optional</sup> <a name="iamRoleForIdentityCenterApplicationArnInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArnInput"></a>

```typescript
public readonly iamRoleForIdentityCenterApplicationArnInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iamIdentityCenterInstanceArn`<sup>Required</sup> <a name="iamIdentityCenterInstanceArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamIdentityCenterInstanceArn"></a>

```typescript
public readonly iamIdentityCenterInstanceArn: string;
```

- *Type:* string

---

##### `iamRoleForIdentityCenterApplicationArn`<sup>Required</sup> <a name="iamRoleForIdentityCenterApplicationArn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.iamRoleForIdentityCenterApplicationArn"></a>

```typescript
public readonly iamRoleForIdentityCenterApplicationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchserviceApplicationIamIdentityCenterOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationIamIdentityCenterOptions">OpensearchserviceApplicationIamIdentityCenterOptions</a>

---


### OpensearchserviceApplicationTagsList <a name="OpensearchserviceApplicationTagsList" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

new opensearchserviceApplication.OpensearchserviceApplicationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.get"></a>

```typescript
public get(index: number): OpensearchserviceApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchserviceApplicationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>[]

---


### OpensearchserviceApplicationTagsOutputReference <a name="OpensearchserviceApplicationTagsOutputReference" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer"></a>

```typescript
import { opensearchserviceApplication } from '@cdktn/provider-awscc'

new opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchserviceApplicationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchserviceApplication.OpensearchserviceApplicationTags">OpensearchserviceApplicationTags</a>

---




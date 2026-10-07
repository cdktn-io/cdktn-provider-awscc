# `cloudfrontFieldLevelEncryptionProfile` Submodule <a name="`cloudfrontFieldLevelEncryptionProfile` Submodule" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontFieldLevelEncryptionProfile <a name="CloudfrontFieldLevelEncryptionProfile" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile awscc_cloudfront_field_level_encryption_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer"></a>

```typescript
import { cloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

new cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile(scope: Construct, id: string, config: CloudfrontFieldLevelEncryptionProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putFieldLevelEncryptionProfileConfig">putFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFieldLevelEncryptionProfileConfig` <a name="putFieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putFieldLevelEncryptionProfileConfig"></a>

```typescript
public putFieldLevelEncryptionProfileConfig(value: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putFieldLevelEncryptionProfileConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontFieldLevelEncryptionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct"></a>

```typescript
import { cloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement"></a>

```typescript
import { cloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource"></a>

```typescript
import { cloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport"></a>

```typescript
import { cloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudfrontFieldLevelEncryptionProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontFieldLevelEncryptionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontFieldLevelEncryptionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontFieldLevelEncryptionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfig">fieldLevelEncryptionProfileConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileId">fieldLevelEncryptionProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfigInput">fieldLevelEncryptionProfileConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fieldLevelEncryptionProfileConfig`<sup>Required</sup> <a name="fieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfig"></a>

```typescript
public readonly fieldLevelEncryptionProfileConfig: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference</a>

---

##### `fieldLevelEncryptionProfileId`<sup>Required</sup> <a name="fieldLevelEncryptionProfileId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileId"></a>

```typescript
public readonly fieldLevelEncryptionProfileId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `fieldLevelEncryptionProfileConfigInput`<sup>Optional</sup> <a name="fieldLevelEncryptionProfileConfigInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfigInput"></a>

```typescript
public readonly fieldLevelEncryptionProfileConfigInput: IResolvable | CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontFieldLevelEncryptionProfileConfig <a name="CloudfrontFieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.Initializer"></a>

```typescript
import { cloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

const cloudfrontFieldLevelEncryptionProfileConfig: cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.fieldLevelEncryptionProfileConfig">fieldLevelEncryptionProfileConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a></code> | The configuration of a field-level encryption profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fieldLevelEncryptionProfileConfig`<sup>Required</sup> <a name="fieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.fieldLevelEncryptionProfileConfig"></a>

```typescript
public readonly fieldLevelEncryptionProfileConfig: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

The configuration of a field-level encryption profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#field_level_encryption_profile_config CloudfrontFieldLevelEncryptionProfile#field_level_encryption_profile_config}

---

### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.Initializer"></a>

```typescript
import { cloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

const cloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig: cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.callerReference">callerReference</a></code> | <code>string</code> | A unique value that identifies the creation request. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.encryptionEntities">encryptionEntities</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]</code> | The encryption entities of the field-level encryption profile. At least one entity is required. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.name">name</a></code> | <code>string</code> | The name of the field-level encryption profile. Names are unique within an AWS account. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.comment">comment</a></code> | <code>string</code> | An optional comment describing the field-level encryption profile. |

---

##### `callerReference`<sup>Required</sup> <a name="callerReference" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.callerReference"></a>

```typescript
public readonly callerReference: string;
```

- *Type:* string

A unique value that identifies the creation request.

Caller references are unique within an AWS account and cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#caller_reference CloudfrontFieldLevelEncryptionProfile#caller_reference}

---

##### `encryptionEntities`<sup>Required</sup> <a name="encryptionEntities" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.encryptionEntities"></a>

```typescript
public readonly encryptionEntities: IResolvable | CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]

The encryption entities of the field-level encryption profile. At least one entity is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#encryption_entities CloudfrontFieldLevelEncryptionProfile#encryption_entities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the field-level encryption profile. Names are unique within an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#name CloudfrontFieldLevelEncryptionProfile#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

An optional comment describing the field-level encryption profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#comment CloudfrontFieldLevelEncryptionProfile#comment}

---

### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.Initializer"></a>

```typescript
import { cloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

const cloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities: cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.fieldPatterns">fieldPatterns</a></code> | <code>string[]</code> | The request-body field names to encrypt. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.providerId">providerId</a></code> | <code>string</code> | The provider associated with the public key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.publicKeyId">publicKeyId</a></code> | <code>string</code> | The identifier of the CloudFront public key used to encrypt the fields that match the patterns. |

---

##### `fieldPatterns`<sup>Required</sup> <a name="fieldPatterns" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.fieldPatterns"></a>

```typescript
public readonly fieldPatterns: string[];
```

- *Type:* string[]

The request-body field names to encrypt.

A pattern is either a full field name or leading characters followed by a wildcard (*). Patterns are case-sensitive and must not overlap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#field_patterns CloudfrontFieldLevelEncryptionProfile#field_patterns}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

The provider associated with the public key.

The same value must be supplied with the private key for an application to decrypt the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#provider_id CloudfrontFieldLevelEncryptionProfile#provider_id}

---

##### `publicKeyId`<sup>Required</sup> <a name="publicKeyId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.publicKeyId"></a>

```typescript
public readonly publicKeyId: string;
```

- *Type:* string

The identifier of the CloudFront public key used to encrypt the fields that match the patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#public_key_id CloudfrontFieldLevelEncryptionProfile#public_key_id}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer"></a>

```typescript
import { cloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

new cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get"></a>

```typescript
public get(index: number): CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]

---


### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer"></a>

```typescript
import { cloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

new cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatternsInput">fieldPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerIdInput">providerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyIdInput">publicKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatterns">fieldPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerId">providerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyId">publicKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldPatternsInput`<sup>Optional</sup> <a name="fieldPatternsInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatternsInput"></a>

```typescript
public readonly fieldPatternsInput: string[];
```

- *Type:* string[]

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerIdInput"></a>

```typescript
public readonly providerIdInput: string;
```

- *Type:* string

---

##### `publicKeyIdInput`<sup>Optional</sup> <a name="publicKeyIdInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyIdInput"></a>

```typescript
public readonly publicKeyIdInput: string;
```

- *Type:* string

---

##### `fieldPatterns`<sup>Required</sup> <a name="fieldPatterns" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatterns"></a>

```typescript
public readonly fieldPatterns: string[];
```

- *Type:* string[]

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

---

##### `publicKeyId`<sup>Required</sup> <a name="publicKeyId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyId"></a>

```typescript
public readonly publicKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>

---


### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontFieldLevelEncryptionProfile } from '@cdktn/provider-awscc'

new cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.putEncryptionEntities">putEncryptionEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resetComment">resetComment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionEntities` <a name="putEncryptionEntities" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.putEncryptionEntities"></a>

```typescript
public putEncryptionEntities(value: IResolvable | CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.putEncryptionEntities.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntities">encryptionEntities</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReferenceInput">callerReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntitiesInput">encryptionEntitiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReference">callerReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionEntities`<sup>Required</sup> <a name="encryptionEntities" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntities"></a>

```typescript
public readonly encryptionEntities: CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList</a>

---

##### `callerReferenceInput`<sup>Optional</sup> <a name="callerReferenceInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReferenceInput"></a>

```typescript
public readonly callerReferenceInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `encryptionEntitiesInput`<sup>Optional</sup> <a name="encryptionEntitiesInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntitiesInput"></a>

```typescript
public readonly encryptionEntitiesInput: IResolvable | CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `callerReference`<sup>Required</sup> <a name="callerReference" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReference"></a>

```typescript
public readonly callerReference: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

---




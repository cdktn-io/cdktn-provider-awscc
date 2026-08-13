# `personalizeDatasetGroup` Submodule <a name="`personalizeDatasetGroup` Submodule" id="@cdktn/provider-awscc.personalizeDatasetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeDatasetGroup <a name="PersonalizeDatasetGroup" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_dataset_group awscc_personalize_dataset_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.Initializer"></a>

```typescript
import { personalizeDatasetGroup } from '@cdktn/provider-awscc'

new personalizeDatasetGroup.PersonalizeDatasetGroup(scope: Construct, id: string, config: PersonalizeDatasetGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig">PersonalizeDatasetGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig">PersonalizeDatasetGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PersonalizeDatasetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.isConstruct"></a>

```typescript
import { personalizeDatasetGroup } from '@cdktn/provider-awscc'

personalizeDatasetGroup.PersonalizeDatasetGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.isTerraformElement"></a>

```typescript
import { personalizeDatasetGroup } from '@cdktn/provider-awscc'

personalizeDatasetGroup.PersonalizeDatasetGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.isTerraformResource"></a>

```typescript
import { personalizeDatasetGroup } from '@cdktn/provider-awscc'

personalizeDatasetGroup.PersonalizeDatasetGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.generateConfigForImport"></a>

```typescript
import { personalizeDatasetGroup } from '@cdktn/provider-awscc'

personalizeDatasetGroup.PersonalizeDatasetGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PersonalizeDatasetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PersonalizeDatasetGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PersonalizeDatasetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_dataset_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeDatasetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.datasetGroupArn">datasetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `datasetGroupArn`<sup>Required</sup> <a name="datasetGroupArn" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.datasetGroupArn"></a>

```typescript
public readonly datasetGroupArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeDatasetGroupConfig <a name="PersonalizeDatasetGroupConfig" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.Initializer"></a>

```typescript
import { personalizeDatasetGroup } from '@cdktn/provider-awscc'

const personalizeDatasetGroupConfig: personalizeDatasetGroup.PersonalizeDatasetGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.name">name</a></code> | <code>string</code> | The name for the new dataset group. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.domain">domain</a></code> | <code>string</code> | The domain of a Domain dataset group. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | The Amazon Resource Name(ARN) of a AWS Key Management Service (KMS) key used to encrypt the datasets. |
| <code><a href="#@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the AWS Identity and Access Management (IAM) role that has permissions to access the AWS Key Management Service (KMS) key. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for the new dataset group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_dataset_group#name PersonalizeDatasetGroup#name}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The domain of a Domain dataset group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_dataset_group#domain PersonalizeDatasetGroup#domain}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

The Amazon Resource Name(ARN) of a AWS Key Management Service (KMS) key used to encrypt the datasets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_dataset_group#kms_key_arn PersonalizeDatasetGroup#kms_key_arn}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.personalizeDatasetGroup.PersonalizeDatasetGroupConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the AWS Identity and Access Management (IAM) role that has permissions to access the AWS Key Management Service (KMS) key.

Supplying an IAM role is only valid when also specifying a KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_dataset_group#role_arn PersonalizeDatasetGroup#role_arn}

---




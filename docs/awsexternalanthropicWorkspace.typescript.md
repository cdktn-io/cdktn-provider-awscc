# `awsexternalanthropicWorkspace` Submodule <a name="`awsexternalanthropicWorkspace` Submodule" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsexternalanthropicWorkspace <a name="AwsexternalanthropicWorkspace" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace awscc_awsexternalanthropic_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer"></a>

```typescript
import { awsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

new awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace(scope: Construct, id: string, config: AwsexternalanthropicWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig">AwsexternalanthropicWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig">AwsexternalanthropicWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putDataResidency">putDataResidency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetDataResidency">resetDataResidency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataResidency` <a name="putDataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putDataResidency"></a>

```typescript
public putDataResidency(value: AwsexternalanthropicWorkspaceDataResidency): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putDataResidency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putTags"></a>

```typescript
public putTags(value: IResolvable | AwsexternalanthropicWorkspaceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]

---

##### `resetDataResidency` <a name="resetDataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetDataResidency"></a>

```typescript
public resetDataResidency(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isConstruct"></a>

```typescript
import { awsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformElement"></a>

```typescript
import { awsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformResource"></a>

```typescript
import { awsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport"></a>

```typescript
import { awsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AwsexternalanthropicWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsexternalanthropicWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsexternalanthropicWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AwsexternalanthropicWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidency">dataResidency</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference">AwsexternalanthropicWorkspaceDataResidencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList">AwsexternalanthropicWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidencyInput">dataResidencyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataResidency`<sup>Required</sup> <a name="dataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidency"></a>

```typescript
public readonly dataResidency: AwsexternalanthropicWorkspaceDataResidencyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference">AwsexternalanthropicWorkspaceDataResidencyOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tags"></a>

```typescript
public readonly tags: AwsexternalanthropicWorkspaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList">AwsexternalanthropicWorkspaceTagsList</a>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `dataResidencyInput`<sup>Optional</sup> <a name="dataResidencyInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.dataResidencyInput"></a>

```typescript
public readonly dataResidencyInput: IResolvable | AwsexternalanthropicWorkspaceDataResidency;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AwsexternalanthropicWorkspaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsexternalanthropicWorkspaceConfig <a name="AwsexternalanthropicWorkspaceConfig" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.Initializer"></a>

```typescript
import { awsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

const awsexternalanthropicWorkspaceConfig: awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.name">name</a></code> | <code>string</code> | The name of the workspace. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dataResidency">dataResidency</a></code> | <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a></code> | Data residency configuration for the workspace. WorkspaceGeo is immutable after creation. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#name AwsexternalanthropicWorkspace#name}

---

##### `dataResidency`<sup>Optional</sup> <a name="dataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.dataResidency"></a>

```typescript
public readonly dataResidency: AwsexternalanthropicWorkspaceDataResidency;
```

- *Type:* <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

Data residency configuration for the workspace. WorkspaceGeo is immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#data_residency AwsexternalanthropicWorkspace#data_residency}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AwsexternalanthropicWorkspaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#tags AwsexternalanthropicWorkspace#tags}

---

### AwsexternalanthropicWorkspaceDataResidency <a name="AwsexternalanthropicWorkspaceDataResidency" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.Initializer"></a>

```typescript
import { awsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

const awsexternalanthropicWorkspaceDataResidency: awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.allowedInferenceGeos">allowedInferenceGeos</a></code> | <code>string[]</code> | Permitted inference geo values. Omit to allow all geos (the service default of 'unrestricted'); otherwise list specific geos. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.defaultInferenceGeo">defaultInferenceGeo</a></code> | <code>string</code> | Default inference geo applied when requests omit the parameter. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.workspaceGeo">workspaceGeo</a></code> | <code>string</code> | Geographic region for workspace data storage. Immutable after creation. Defaults to 'us' if omitted. |

---

##### `allowedInferenceGeos`<sup>Optional</sup> <a name="allowedInferenceGeos" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.allowedInferenceGeos"></a>

```typescript
public readonly allowedInferenceGeos: string[];
```

- *Type:* string[]

Permitted inference geo values. Omit to allow all geos (the service default of 'unrestricted'); otherwise list specific geos.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#allowed_inference_geos AwsexternalanthropicWorkspace#allowed_inference_geos}

---

##### `defaultInferenceGeo`<sup>Optional</sup> <a name="defaultInferenceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.defaultInferenceGeo"></a>

```typescript
public readonly defaultInferenceGeo: string;
```

- *Type:* string

Default inference geo applied when requests omit the parameter.

Defaults to 'global' if omitted. Must be a member of AllowedInferenceGeos unless AllowedInferenceGeos is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#default_inference_geo AwsexternalanthropicWorkspace#default_inference_geo}

---

##### `workspaceGeo`<sup>Optional</sup> <a name="workspaceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency.property.workspaceGeo"></a>

```typescript
public readonly workspaceGeo: string;
```

- *Type:* string

Geographic region for workspace data storage. Immutable after creation. Defaults to 'us' if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#workspace_geo AwsexternalanthropicWorkspace#workspace_geo}

---

### AwsexternalanthropicWorkspaceTags <a name="AwsexternalanthropicWorkspaceTags" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.Initializer"></a>

```typescript
import { awsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

const awsexternalanthropicWorkspaceTags: awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#key AwsexternalanthropicWorkspace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/awsexternalanthropic_workspace#value AwsexternalanthropicWorkspace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AwsexternalanthropicWorkspaceDataResidencyOutputReference <a name="AwsexternalanthropicWorkspaceDataResidencyOutputReference" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer"></a>

```typescript
import { awsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

new awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetAllowedInferenceGeos">resetAllowedInferenceGeos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetDefaultInferenceGeo">resetDefaultInferenceGeo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetWorkspaceGeo">resetWorkspaceGeo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedInferenceGeos` <a name="resetAllowedInferenceGeos" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetAllowedInferenceGeos"></a>

```typescript
public resetAllowedInferenceGeos(): void
```

##### `resetDefaultInferenceGeo` <a name="resetDefaultInferenceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetDefaultInferenceGeo"></a>

```typescript
public resetDefaultInferenceGeo(): void
```

##### `resetWorkspaceGeo` <a name="resetWorkspaceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.resetWorkspaceGeo"></a>

```typescript
public resetWorkspaceGeo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeosInput">allowedInferenceGeosInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeoInput">defaultInferenceGeoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeoInput">workspaceGeoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos">allowedInferenceGeos</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo">defaultInferenceGeo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo">workspaceGeo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedInferenceGeosInput`<sup>Optional</sup> <a name="allowedInferenceGeosInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeosInput"></a>

```typescript
public readonly allowedInferenceGeosInput: string[];
```

- *Type:* string[]

---

##### `defaultInferenceGeoInput`<sup>Optional</sup> <a name="defaultInferenceGeoInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeoInput"></a>

```typescript
public readonly defaultInferenceGeoInput: string;
```

- *Type:* string

---

##### `workspaceGeoInput`<sup>Optional</sup> <a name="workspaceGeoInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeoInput"></a>

```typescript
public readonly workspaceGeoInput: string;
```

- *Type:* string

---

##### `allowedInferenceGeos`<sup>Required</sup> <a name="allowedInferenceGeos" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.allowedInferenceGeos"></a>

```typescript
public readonly allowedInferenceGeos: string[];
```

- *Type:* string[]

---

##### `defaultInferenceGeo`<sup>Required</sup> <a name="defaultInferenceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.defaultInferenceGeo"></a>

```typescript
public readonly defaultInferenceGeo: string;
```

- *Type:* string

---

##### `workspaceGeo`<sup>Required</sup> <a name="workspaceGeo" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.workspaceGeo"></a>

```typescript
public readonly workspaceGeo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AwsexternalanthropicWorkspaceDataResidency;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceDataResidency">AwsexternalanthropicWorkspaceDataResidency</a>

---


### AwsexternalanthropicWorkspaceTagsList <a name="AwsexternalanthropicWorkspaceTagsList" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer"></a>

```typescript
import { awsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

new awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.get"></a>

```typescript
public get(index: number): AwsexternalanthropicWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AwsexternalanthropicWorkspaceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>[]

---


### AwsexternalanthropicWorkspaceTagsOutputReference <a name="AwsexternalanthropicWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer"></a>

```typescript
import { awsexternalanthropicWorkspace } from '@cdktn/provider-awscc'

new awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AwsexternalanthropicWorkspaceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.awsexternalanthropicWorkspace.AwsexternalanthropicWorkspaceTags">AwsexternalanthropicWorkspaceTags</a>

---




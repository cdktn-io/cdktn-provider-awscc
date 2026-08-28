# `ssmquicksetupLifecycleAutomation` Submodule <a name="`ssmquicksetupLifecycleAutomation` Submodule" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmquicksetupLifecycleAutomation <a name="SsmquicksetupLifecycleAutomation" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_lifecycle_automation awscc_ssmquicksetup_lifecycle_automation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer"></a>

```typescript
import { ssmquicksetupLifecycleAutomation } from '@cdktn/provider-awscc'

new ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation(scope: Construct, id: string, config: SsmquicksetupLifecycleAutomationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig">SsmquicksetupLifecycleAutomationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig">SsmquicksetupLifecycleAutomationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsmquicksetupLifecycleAutomation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct"></a>

```typescript
import { ssmquicksetupLifecycleAutomation } from '@cdktn/provider-awscc'

ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement"></a>

```typescript
import { ssmquicksetupLifecycleAutomation } from '@cdktn/provider-awscc'

ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource"></a>

```typescript
import { ssmquicksetupLifecycleAutomation } from '@cdktn/provider-awscc'

ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport"></a>

```typescript
import { ssmquicksetupLifecycleAutomation } from '@cdktn/provider-awscc'

ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SsmquicksetupLifecycleAutomation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmquicksetupLifecycleAutomation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmquicksetupLifecycleAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_lifecycle_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SsmquicksetupLifecycleAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocumentInput">automationDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParametersInput">automationParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKeyInput">resourceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocument">automationDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParameters">automationParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKey">resourceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `automationDocumentInput`<sup>Optional</sup> <a name="automationDocumentInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocumentInput"></a>

```typescript
public readonly automationDocumentInput: string;
```

- *Type:* string

---

##### `automationParametersInput`<sup>Optional</sup> <a name="automationParametersInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParametersInput"></a>

```typescript
public readonly automationParametersInput: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `resourceKeyInput`<sup>Optional</sup> <a name="resourceKeyInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKeyInput"></a>

```typescript
public readonly resourceKeyInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `automationDocument`<sup>Required</sup> <a name="automationDocument" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationDocument"></a>

```typescript
public readonly automationDocument: string;
```

- *Type:* string

---

##### `automationParameters`<sup>Required</sup> <a name="automationParameters" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.automationParameters"></a>

```typescript
public readonly automationParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

---

##### `resourceKey`<sup>Required</sup> <a name="resourceKey" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.resourceKey"></a>

```typescript
public readonly resourceKey: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmquicksetupLifecycleAutomationConfig <a name="SsmquicksetupLifecycleAutomationConfig" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.Initializer"></a>

```typescript
import { ssmquicksetupLifecycleAutomation } from '@cdktn/provider-awscc'

const ssmquicksetupLifecycleAutomationConfig: ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationDocument">automationDocument</a></code> | <code>string</code> | The name of the Automation document to execute. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationParameters">automationParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string[]}</code> | Parameters to be passed to the Automation Document. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.resourceKey">resourceKey</a></code> | <code>string</code> | A unique identifier used for generating a unique logical ID for the custom resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `automationDocument`<sup>Required</sup> <a name="automationDocument" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationDocument"></a>

```typescript
public readonly automationDocument: string;
```

- *Type:* string

The name of the Automation document to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_document SsmquicksetupLifecycleAutomation#automation_document}

---

##### `automationParameters`<sup>Required</sup> <a name="automationParameters" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.automationParameters"></a>

```typescript
public readonly automationParameters: IResolvable | {[ key: string ]: string[]};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string[]}

Parameters to be passed to the Automation Document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_lifecycle_automation#automation_parameters SsmquicksetupLifecycleAutomation#automation_parameters}

---

##### `resourceKey`<sup>Required</sup> <a name="resourceKey" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.resourceKey"></a>

```typescript
public readonly resourceKey: string;
```

- *Type:* string

A unique identifier used for generating a unique logical ID for the custom resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_lifecycle_automation#resource_key SsmquicksetupLifecycleAutomation#resource_key}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ssmquicksetupLifecycleAutomation.SsmquicksetupLifecycleAutomationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmquicksetup_lifecycle_automation#tags SsmquicksetupLifecycleAutomation#tags}.

---




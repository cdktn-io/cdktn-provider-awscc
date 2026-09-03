# `guarddutyCustomDetectionRuleAssociation` Submodule <a name="`guarddutyCustomDetectionRuleAssociation` Submodule" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyCustomDetectionRuleAssociation <a name="GuarddutyCustomDetectionRuleAssociation" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association awscc_guardduty_custom_detection_rule_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer"></a>

```typescript
import { guarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

new guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation(scope: Construct, id: string, config: GuarddutyCustomDetectionRuleAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig">GuarddutyCustomDetectionRuleAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig">GuarddutyCustomDetectionRuleAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.putTags"></a>

```typescript
public putTags(value: IResolvable | GuarddutyCustomDetectionRuleAssociationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isConstruct"></a>

```typescript
import { guarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformElement"></a>

```typescript
import { guarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformResource"></a>

```typescript
import { guarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport"></a>

```typescript
import { guarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GuarddutyCustomDetectionRuleAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GuarddutyCustomDetectionRuleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyCustomDetectionRuleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList">GuarddutyCustomDetectionRuleAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tags"></a>

```typescript
public readonly tags: GuarddutyCustomDetectionRuleAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList">GuarddutyCustomDetectionRuleAssociationTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GuarddutyCustomDetectionRuleAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>[]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyCustomDetectionRuleAssociationConfig <a name="GuarddutyCustomDetectionRuleAssociationConfig" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.Initializer"></a>

```typescript
import { guarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

const guarddutyCustomDetectionRuleAssociationConfig: guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.mode">mode</a></code> | <code>string</code> | Whether the rule runs in LIVE mode (generates findings) or DRY_RUN mode (evaluates without generating findings). |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.ruleId">ruleId</a></code> | <code>string</code> | The catalog identifier of the custom detection rule to associate. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>[]</code> | The tags applied to the association. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Whether the rule runs in LIVE mode (generates findings) or DRY_RUN mode (evaluates without generating findings).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#mode GuarddutyCustomDetectionRuleAssociation#mode}

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The catalog identifier of the custom detection rule to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#rule_id GuarddutyCustomDetectionRuleAssociation#rule_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | GuarddutyCustomDetectionRuleAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>[]

The tags applied to the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#tags GuarddutyCustomDetectionRuleAssociation#tags}

---

### GuarddutyCustomDetectionRuleAssociationTags <a name="GuarddutyCustomDetectionRuleAssociationTags" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.Initializer"></a>

```typescript
import { guarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

const guarddutyCustomDetectionRuleAssociationTags: guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#key GuarddutyCustomDetectionRuleAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#value GuarddutyCustomDetectionRuleAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#key GuarddutyCustomDetectionRuleAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/guardduty_custom_detection_rule_association#value GuarddutyCustomDetectionRuleAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyCustomDetectionRuleAssociationTagsList <a name="GuarddutyCustomDetectionRuleAssociationTagsList" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer"></a>

```typescript
import { guarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

new guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.get"></a>

```typescript
public get(index: number): GuarddutyCustomDetectionRuleAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GuarddutyCustomDetectionRuleAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>[]

---


### GuarddutyCustomDetectionRuleAssociationTagsOutputReference <a name="GuarddutyCustomDetectionRuleAssociationTagsOutputReference" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer"></a>

```typescript
import { guarddutyCustomDetectionRuleAssociation } from '@cdktn/provider-awscc'

new guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GuarddutyCustomDetectionRuleAssociationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.guarddutyCustomDetectionRuleAssociation.GuarddutyCustomDetectionRuleAssociationTags">GuarddutyCustomDetectionRuleAssociationTags</a>

---




# `rtbfabricLinkRoutingRule` Submodule <a name="`rtbfabricLinkRoutingRule` Submodule" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricLinkRoutingRule <a name="RtbfabricLinkRoutingRule" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule awscc_rtbfabric_link_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer"></a>

```typescript
import { rtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

new rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule(scope: Construct, id: string, config: RtbfabricLinkRoutingRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig">RtbfabricLinkRoutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig">RtbfabricLinkRoutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions"></a>

```typescript
public putConditions(value: RtbfabricLinkRoutingRuleConditions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags"></a>

```typescript
public putTags(value: IResolvable | RtbfabricLinkRoutingRuleTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricLinkRoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct"></a>

```typescript
import { rtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement"></a>

```typescript
import { rtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource"></a>

```typescript
import { rtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport"></a>

```typescript
import { rtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RtbfabricLinkRoutingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RtbfabricLinkRoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RtbfabricLinkRoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricLinkRoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference">RtbfabricLinkRoutingRuleConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList">RtbfabricLinkRoutingRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkIdInput">linkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkId">linkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditions"></a>

```typescript
public readonly conditions: RtbfabricLinkRoutingRuleConditionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference">RtbfabricLinkRoutingRuleConditionsOutputReference</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tags"></a>

```typescript
public readonly tags: RtbfabricLinkRoutingRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList">RtbfabricLinkRoutingRuleTagsList</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | RtbfabricLinkRoutingRuleConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `linkIdInput`<sup>Optional</sup> <a name="linkIdInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkIdInput"></a>

```typescript
public readonly linkIdInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RtbfabricLinkRoutingRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricLinkRoutingRuleConditions <a name="RtbfabricLinkRoutingRuleConditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.Initializer"></a>

```typescript
import { rtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

const rtbfabricLinkRoutingRuleConditions: rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeader">hostHeader</a></code> | <code>string</code> | Exact host match ? RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeaderWildcard">hostHeaderWildcard</a></code> | <code>string</code> | Wildcard host pattern (e.g., *.example.com) ? RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathExact">pathExact</a></code> | <code>string</code> | Exact path match ? must start with /. Mutually exclusive with PathPrefix. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | Path prefix matching ? strict starts-with, must start with /. Mutually exclusive with PathExact. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringEquals">queryStringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | Query string key=value pair match (single pair). |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringExists">queryStringExists</a></code> | <code>string</code> | Query string key presence check (any value accepted). |

---

##### `hostHeader`<sup>Optional</sup> <a name="hostHeader" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeader"></a>

```typescript
public readonly hostHeader: string;
```

- *Type:* string

Exact host match ? RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#host_header RtbfabricLinkRoutingRule#host_header}

---

##### `hostHeaderWildcard`<sup>Optional</sup> <a name="hostHeaderWildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.hostHeaderWildcard"></a>

```typescript
public readonly hostHeaderWildcard: string;
```

- *Type:* string

Wildcard host pattern (e.g., *.example.com) ? RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#host_header_wildcard RtbfabricLinkRoutingRule#host_header_wildcard}

---

##### `pathExact`<sup>Optional</sup> <a name="pathExact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathExact"></a>

```typescript
public readonly pathExact: string;
```

- *Type:* string

Exact path match ? must start with /. Mutually exclusive with PathPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#path_exact RtbfabricLinkRoutingRule#path_exact}

---

##### `pathPrefix`<sup>Optional</sup> <a name="pathPrefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

Path prefix matching ? strict starts-with, must start with /. Mutually exclusive with PathExact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#path_prefix RtbfabricLinkRoutingRule#path_prefix}

---

##### `queryStringEquals`<sup>Optional</sup> <a name="queryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringEquals"></a>

```typescript
public readonly queryStringEquals: RtbfabricLinkRoutingRuleConditionsQueryStringEquals;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

Query string key=value pair match (single pair).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#query_string_equals RtbfabricLinkRoutingRule#query_string_equals}

---

##### `queryStringExists`<sup>Optional</sup> <a name="queryStringExists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions.property.queryStringExists"></a>

```typescript
public readonly queryStringExists: string;
```

- *Type:* string

Query string key presence check (any value accepted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#query_string_exists RtbfabricLinkRoutingRule#query_string_exists}

---

### RtbfabricLinkRoutingRuleConditionsQueryStringEquals <a name="RtbfabricLinkRoutingRuleConditionsQueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.Initializer"></a>

```typescript
import { rtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

const rtbfabricLinkRoutingRuleConditionsQueryStringEquals: rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.key">key</a></code> | <code>string</code> | Query string key ? RFC 3986 unreserved characters. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.value">value</a></code> | <code>string</code> | Query string value ? RFC 3986 unreserved characters. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Query string key ? RFC 3986 unreserved characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#key RtbfabricLinkRoutingRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Query string value ? RFC 3986 unreserved characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#value RtbfabricLinkRoutingRule#value}

---

### RtbfabricLinkRoutingRuleConfig <a name="RtbfabricLinkRoutingRuleConfig" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.Initializer"></a>

```typescript
import { rtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

const rtbfabricLinkRoutingRuleConfig: rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | Conditions for a routing rule. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.linkId">linkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]</code> | Tags to assign to the LinkRoutingRule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.conditions"></a>

```typescript
public readonly conditions: RtbfabricLinkRoutingRuleConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

Conditions for a routing rule.

All non-null fields must match (AND logic). At least one field must be set. HostHeader and HostHeaderWildcard are mutually exclusive. PathPrefix and PathExact are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#conditions RtbfabricLinkRoutingRule#conditions}

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#gateway_id RtbfabricLinkRoutingRule#gateway_id}.

---

##### `linkId`<sup>Required</sup> <a name="linkId" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.linkId"></a>

```typescript
public readonly linkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#link_id RtbfabricLinkRoutingRule#link_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#priority RtbfabricLinkRoutingRule#priority}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RtbfabricLinkRoutingRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]

Tags to assign to the LinkRoutingRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#tags RtbfabricLinkRoutingRule#tags}

---

### RtbfabricLinkRoutingRuleTags <a name="RtbfabricLinkRoutingRuleTags" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.Initializer"></a>

```typescript
import { rtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

const rtbfabricLinkRoutingRuleTags: rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#key RtbfabricLinkRoutingRule#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/rtbfabric_link_routing_rule#value RtbfabricLinkRoutingRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricLinkRoutingRuleConditionsOutputReference <a name="RtbfabricLinkRoutingRuleConditionsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer"></a>

```typescript
import { rtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

new rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals">putQueryStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeader">resetHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeaderWildcard">resetHostHeaderWildcard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathExact">resetPathExact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathPrefix">resetPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringEquals">resetQueryStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringExists">resetQueryStringExists</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueryStringEquals` <a name="putQueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals"></a>

```typescript
public putQueryStringEquals(value: RtbfabricLinkRoutingRuleConditionsQueryStringEquals): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.putQueryStringEquals.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

---

##### `resetHostHeader` <a name="resetHostHeader" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeader"></a>

```typescript
public resetHostHeader(): void
```

##### `resetHostHeaderWildcard` <a name="resetHostHeaderWildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetHostHeaderWildcard"></a>

```typescript
public resetHostHeaderWildcard(): void
```

##### `resetPathExact` <a name="resetPathExact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathExact"></a>

```typescript
public resetPathExact(): void
```

##### `resetPathPrefix` <a name="resetPathPrefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetPathPrefix"></a>

```typescript
public resetPathPrefix(): void
```

##### `resetQueryStringEquals` <a name="resetQueryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringEquals"></a>

```typescript
public resetQueryStringEquals(): void
```

##### `resetQueryStringExists` <a name="resetQueryStringExists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.resetQueryStringExists"></a>

```typescript
public resetQueryStringExists(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEquals">queryStringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference">RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderInput">hostHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcardInput">hostHeaderWildcardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExactInput">pathExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefixInput">pathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEqualsInput">queryStringEqualsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExistsInput">queryStringExistsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeader">hostHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcard">hostHeaderWildcard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExact">pathExact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExists">queryStringExists</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryStringEquals`<sup>Required</sup> <a name="queryStringEquals" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEquals"></a>

```typescript
public readonly queryStringEquals: RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference">RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference</a>

---

##### `hostHeaderInput`<sup>Optional</sup> <a name="hostHeaderInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderInput"></a>

```typescript
public readonly hostHeaderInput: string;
```

- *Type:* string

---

##### `hostHeaderWildcardInput`<sup>Optional</sup> <a name="hostHeaderWildcardInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcardInput"></a>

```typescript
public readonly hostHeaderWildcardInput: string;
```

- *Type:* string

---

##### `pathExactInput`<sup>Optional</sup> <a name="pathExactInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExactInput"></a>

```typescript
public readonly pathExactInput: string;
```

- *Type:* string

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefixInput"></a>

```typescript
public readonly pathPrefixInput: string;
```

- *Type:* string

---

##### `queryStringEqualsInput`<sup>Optional</sup> <a name="queryStringEqualsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringEqualsInput"></a>

```typescript
public readonly queryStringEqualsInput: IResolvable | RtbfabricLinkRoutingRuleConditionsQueryStringEquals;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

---

##### `queryStringExistsInput`<sup>Optional</sup> <a name="queryStringExistsInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExistsInput"></a>

```typescript
public readonly queryStringExistsInput: string;
```

- *Type:* string

---

##### `hostHeader`<sup>Required</sup> <a name="hostHeader" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeader"></a>

```typescript
public readonly hostHeader: string;
```

- *Type:* string

---

##### `hostHeaderWildcard`<sup>Required</sup> <a name="hostHeaderWildcard" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.hostHeaderWildcard"></a>

```typescript
public readonly hostHeaderWildcard: string;
```

- *Type:* string

---

##### `pathExact`<sup>Required</sup> <a name="pathExact" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathExact"></a>

```typescript
public readonly pathExact: string;
```

- *Type:* string

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

---

##### `queryStringExists`<sup>Required</sup> <a name="queryStringExists" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.queryStringExists"></a>

```typescript
public readonly queryStringExists: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricLinkRoutingRuleConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditions">RtbfabricLinkRoutingRuleConditions</a>

---


### RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference <a name="RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer"></a>

```typescript
import { rtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

new rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEqualsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricLinkRoutingRuleConditionsQueryStringEquals;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleConditionsQueryStringEquals">RtbfabricLinkRoutingRuleConditionsQueryStringEquals</a>

---


### RtbfabricLinkRoutingRuleTagsList <a name="RtbfabricLinkRoutingRuleTagsList" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer"></a>

```typescript
import { rtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

new rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get"></a>

```typescript
public get(index: number): RtbfabricLinkRoutingRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricLinkRoutingRuleTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>[]

---


### RtbfabricLinkRoutingRuleTagsOutputReference <a name="RtbfabricLinkRoutingRuleTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer"></a>

```typescript
import { rtbfabricLinkRoutingRule } from '@cdktn/provider-awscc'

new rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricLinkRoutingRuleTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricLinkRoutingRule.RtbfabricLinkRoutingRuleTags">RtbfabricLinkRoutingRuleTags</a>

---



